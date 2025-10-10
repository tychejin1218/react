import React, { useState } from 'react';
import { getTodos } from '../services/api';
import { Container, Row, Col, Form, Button, Card, Badge, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [filters, setFilters] = useState({
    title: '',
    description: '',
    completed: '',
  });

  const handleFilterChange = ({ target: { name, value } }) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getTodos(filters);
      setTodos(data);
    } catch (err) {
      setError(err.message || '할 일 목록을 가져오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-4">
      <h1 className="mb-4">할 일 목록</h1>

      {/* 필터 폼 */}
      <TodoFilterForm
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        loading={loading}
      />

      {/* 에러 메시지 */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* 할 일 목록 */}
      {renderTodoList(todos, loading)}
    </Container>
  );
};

// 필터 폼 컴포넌트
const TodoFilterForm = ({ filters, onFilterChange, onSearch, loading }) => (
  <Form className="mb-4">
    <Row className="align-items-center">
      {/* 제목 필터 */}
      <Col md={3}>
        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="제목 입력"
            value={filters.title}
            onChange={onFilterChange}
          />
        </Form.Group>
      </Col>

      {/* 내용 필터 */}
      <Col md={3}>
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="내용 입력"
            value={filters.description}
            onChange={onFilterChange}
          />
        </Form.Group>
      </Col>

      {/* 완료 여부 필터 */}
      <Col md={3}>
        <Form.Group className="mb-3">
          <Form.Label>완료 여부</Form.Label>
          <Form.Select name="completed" value={filters.completed} onChange={onFilterChange}>
            <option value="">전체</option>
            <option value="true">완료</option>
            <option value="false">미완료</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {/* 검색 버튼 */}
      <Col md={3}>
        <Button variant="primary" onClick={onSearch} disabled={loading} className="w-100 mt-4">
          {loading ? <Spinner animation="border" size="sm" /> : '검색'}
        </Button>
      </Col>
    </Row>
  </Form>
);

// 카드 컴포넌트
const TodoCard = ({ todo }) => {
  const navigate = useNavigate();

  return (
    <Col md={6} className="mb-3">
      <Card
        className="shadow-sm"
        onClick={() => navigate(`/todo/${todo.id}`)}
        style={{ cursor: 'pointer' }}
      >
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
          </div>
          <Badge bg={todo.completed ? 'success' : 'secondary'}>
            {todo.completed ? '완료' : '미완료'}
          </Badge>
        </Card.Body>
      </Card>
    </Col>
  );
};

// 리스트 렌더링
const renderTodoList = (todos, loading) => {
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }
  if (todos.length === 0) {
    return <p>할 일이 존재하지 않습니다.</p>;
  }
  return (
    <Row>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Row>
  );
};

export default TodoList;

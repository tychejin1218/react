import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodoById } from '../services/api';
import { Container, Card, Badge, Spinner, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        const data = await getTodoById(id);
        setTodo(data);
      } catch (err) {
        setError(err.message || '할 일 상세 조회 중 오류 발생');
      } finally {
        setLoading(false);
      }
    };
    fetchTodo();
  }, [id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="my-4">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        뒤로가기
      </Button>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Text>{todo.description || '설명 없음'}</Card.Text>
          <Badge bg={todo.completed ? 'success' : 'secondary'}>
            {todo.completed ? '완료' : '미완료'}
          </Badge>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TodoDetail;

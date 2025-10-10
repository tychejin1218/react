import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Main = () => (
  <Container className="my-5">
    <Card className="text-center shadow-sm">
      <Card.Body>
        <Card.Title className="display-4 mb-3">To-Do(할 일) App</Card.Title>
        <Card.Text>
          React + React-Bootstrap 기반의 간단한 To-Do(할 일) 관리 프로젝트입니다.
        </Card.Text>
        <Card.Text>
          상단 메뉴의 <strong>To-Do</strong>에서 할 일 목록을 확인하고 CRUD 기능을 사용하세요.
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default Main;

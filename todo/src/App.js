import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import Main from './components/Main';
import TodoList from './components/TodoList';

const App = () => (
  <Router>
    {/* Navbar */}
    <CustomNavbar />

    {/* Content */}
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Container>
  </Router>
);

const CustomNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">To-Do(할 일) App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">메인</Nav.Link>
          <Nav.Link href="/todo">To-Do(할 일)</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default App;

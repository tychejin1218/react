import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// 컴포넌트 불러오기
import Main from './components/Main';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div>
        {/* 네비게이션 메뉴 */}
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/todo">TodoList</Link>
            </li>
          </ul>
        </nav>

        {/* 라우터 설정 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

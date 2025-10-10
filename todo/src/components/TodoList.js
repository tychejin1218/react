import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/api';
import '../styles/TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]); // 할 일 목록 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태

    // Todo 목록 데이터를 불러오는 함수
    const loadTodos = async () => {
        try {
            const data = await getTodos(); // API 호출
            setTodos(data); // 데이터 상태 업데이트
            setErrorMessage(''); // 에러 메시지 초기화
        } catch (error) {
            setErrorMessage(error.message); // 에러 발생 시 메시지 저장
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    // 컴포넌트가 마운트되었을 때 API 호출
    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>

            {/* 에러 메시지 표시 */}
            {errorMessage && (
                <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>
            )}

            {/* 로딩 표시 */}
            {loading ? (
                <p>Loading...</p>
            ) : todos.length > 0 ? (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <h3>Title: {todo.title}</h3>
                            <p>Description: {todo.description}</p>
                            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos available</p>
            )}
        </div>
    );
};

export default TodoList;
import React, { useState } from 'react';
import { getTodos } from '../services/api';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(''); // 에러 상태

    // 검색 조건을 위한 필터 상태
    const [filters, setFilters] = useState({
        title: '',         // 기본 검색 조건 (title)
        description: '',   // 기본 검색 조건 (description)
        completed: '',     // 기본 검색 조건 (completed)
    });

    // 필터 변경 핸들러
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        // 필터 상태를 업데이트
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value, // 변경된 필드 업데이트
        }));
    };

    // 검색 버튼 클릭 시 호출
    const handleSearch = async () => {
        try {
            setLoading(true); // 로딩 시작
            setError(''); // 기존 에러 초기화
            const data = await getTodos(filters); // API 호출 + 필터 전달
            setTodos(data); // 검색 결과 업데이트
        } catch (error) {
            setError(error.message || 'Error occurred while fetching todos'); // 에러 처리
        } finally {
            setLoading(false); // 로딩 끝
        }
    };

    return (
        <div>
            <h1>할 일 목록</h1>

            {/* 필터 입력 폼 */}
            <div className="filters">
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={filters.title}
                        placeholder="Search by Title"
                        onChange={handleFilterChange}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={filters.description}
                        placeholder="Search by Description"
                        onChange={handleFilterChange}
                    />
                </label>
                <label>
                    Completed:
                    <select
                        name="completed"
                        value={filters.completed}
                        onChange={handleFilterChange}
                    >
                        <option value="">All</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </label>

                {/* 검색 버튼 */}
                <button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {/* 에러 메시지 */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* 로딩 상태 및 검색 결과 표시 */}
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
                <p>No todos found.</p>
            )}
        </div>
    );
};

export default TodoList;
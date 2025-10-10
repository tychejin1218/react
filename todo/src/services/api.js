import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/todo';

export const getTodos = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        const {statusCode, data, message} = response.data;

        // statusCode가 200이 아닌 경우 에러 처리
        if (statusCode !== 200) {
            throw new Error(message); // message를 에러로 던짐
        }

        return data; // statusCode가 200일 경우 데이터 반환
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error; // 에러를 컴포넌트에 전달
    }
};
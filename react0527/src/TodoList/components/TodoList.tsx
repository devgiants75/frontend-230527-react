import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem';
import { useTodoState } from '../contexts/TodoContext';

// TodoListBlock 컴포넌트 지정
const TodoListBlock = styled.div`
  flex: 1; /* 부모 컴포넌트의 남은 공간을 모두 차지 */
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; /* 컨텐츠가 넘치면 스크롤 생성 */
  /* background: gray; */
`;

// Todo 타입 정의
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// TodoList 컴포넌트 지정
export default function TodoList() {
  // useTodoState(커스텀) 훅을 사용하여, todos 상태를 가져옴.
  const todos: Todo[] = useTodoState();

  return (
    <TodoListBlock>
      {/* todos 배열을 map 함수를 사용하여 여러 TodoItem 컴포넌트로 변환 */}
      {todos.map(todo => (
        // 각 TodoItem 컴포넌트에는 key, id, text, done 프로퍼티를 전달
        <TodoItem 
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );

}

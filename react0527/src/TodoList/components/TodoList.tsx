import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem';

// TodoListBlock 컴포넌트 지정
const TodoListBlock = styled.div`
  flex: 1; /* 부모 컴포넌트의 남은 공간을 모두 차지 */
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; /* 컨텐츠가 넘치면 스크롤 생성 */
  /* background: gray; */
`;

// TodoList 컴포넌트 지정
export default function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text='프로젝트 생성하기' done={true} />
      <TodoItem text='컴포넌트 스타일링하기' done={true} />
      <TodoItem text='Context 만들기' done={false} />
      <TodoItem text='기능 구현하기' done={false} />
    </TodoListBlock>
  );

}

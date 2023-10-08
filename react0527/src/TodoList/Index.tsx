import React from 'react'
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

import { TodoProvider } from './contexts/TodoContext';

// 페이지 전역적으로 디자인을 사용할 경우
// createGlobalStyle을 사용
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default function Index() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  )
}

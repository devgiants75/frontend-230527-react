import React from 'react'
import AddTodo from './AddTodo'
import TaskList from './TaskList'

//, Todo 인터페이스 설정
// id - number
// title - string
// done - boolean

// let nextId = 3;
// const initialTodos: Todo[] = [
// {id: 0, title: 'Buy Milk', done: true},
// {id: 1, title: 'Eat Snack', done: false},
// {id: 2, title: 'Do Homework', done: false},
// ];

export default function Index() {
  //, todos 상태관리

  // Todo 추가
  // handleAddTodo

  // Todo 수정
  // handleChangeTodo

  // Todo 삭제
  // handleDeleteTodo

  return (
    <>
      {/* 아래 컴포넌트에 handleAddTodo를 onAddTodo로 전달 */}
      <AddTodo />
      {/* 아래 컴포넌트에 todos, onChangeTodo, onDeleteTodo에 각각의 todos와 핸들러 전달  */}
      <TaskList />
    </>
  )
}

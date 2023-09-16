import React, { useState } from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';

//! 리듀서(Reducer)
// : 컴포넌트 외부의 단일 함수(리듀서)에서 모든 상태 업데이트 
// : 로직을 통합 관리

// 작업 항목에 대한 타입 정의
type TaskType = {
  id: number;
  text: string;
  done: boolean;
}

let nextId = 3;
const initialTasks: TaskType[] = [
  {id: 0, text: 'Visit Museum', done: true},
  {id: 1, text: 'Watch a K-pop show', done: false},
  {id: 2, text: 'Meet with LJG ', done: true},
];

export default function Reducer01() {
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

  // 새로운 작업 추가 함수: handleAddTask
  function handleAddTask() {
    
  }

  // 작업 수정 함수: handleChangeTask
  function handleChangeTask() {

  }

  // 작업 삭제 함수: handleDeleteTask
  function handleDeleteTask() {

  }

  return (
    <>
      <h1>itinerary(여행 일정)</h1>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}

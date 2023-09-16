import React, { useState, useReducer } from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';

//! 리듀서(Reducer)
// : 컴포넌트 외부의 단일 함수(리듀서)에서 
// : 모든 상태 업데이트 로직을 통합 관리
// >> 상태를 관리하는 방법

//? useState => useReducer로 상태 관리 방법을 변경하는 법
// 1. 상태 설정에서 액션 디스패치로 이동
// 2. 리듀서 함수를 작성
// 3. 컴포넌트에서 리듀서를 사용

//? 1. 상태 설정에서 액션 디스패치로 이동
// useState의 경우 React에 무엇을 해야하는지, 작업을 설정
// useReducer의 경우 사용자가 방금 무엇을 했는지, 작업을 추가/변경/삭제 하는 액션을 디스패치(사용자의 의도대로 행동)

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

// 디스패치에 전달하는 객체를 '액션'
type Action = 
  { type: 'added'; id: number; text: string } | 
  { type: 'changed'; task: TaskType } | 
  { type: 'deleted'; id: number };

// type Action = {
    // 컴포넌트에 특정한 것
//  type: string;
    // 다른 필드로 해당 함수에 추가 정보를 전달
//  [key: string]: any;
// }

//? 2. 리듀서 함수를 작성
// function yourReducer(state-현재 상태, action-액션 객체) {
  // React가 설정할 다음 상태를 반환
// }

//* 리듀서 내부에서는 스위치문을 사용하는 것이 관례
//* : 각각의 case를 {}중괄호로 묶어서 서로 다른 case 내에서 선언된
//* : 변수들 간의 충돌을 방지

//? 3. 컴포넌트에서 리듀서를 사용
// React에서 useReducer 훅을 import

/**
 * 작업들을 관리하는 리듀서 함수
 * @param tasks - 현재의 작업 목록
 * @param action - 처리할 액션 객체
 * @returns - 새로운 작업 목록 상태를 반환
 * 
 * */ 
function tasksReducer(tasks: TaskType[], action: Action): TaskType[] {
  // 추가 액션을 처리
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    }

    // 변경 액션을 처리
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }

    // 삭제 액션을 처리
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }

    // 알 수 없는 액션 타입에 대해 오류를 발생
    default: {
      throw Error('알 수 없는 액션: ' + action);
    }
  }

}

export default function Reducer01() {
  // const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
  
  //! 리듀서로 상태관리
  // useReducer 훅은 두 개의 인수를 전달 받는다.
  // : 리듀서 함수, 초기 상태

  // 반환
  // : 상태값, 디스패치함수

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // 새로운 작업 추가 함수: handleAddTask
  function handleAddTask(text: string) {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: nextId++,
    //     text: text,
    //     done: false,
    //   }
    // ]);
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  // 작업 수정 함수: handleChangeTask
  function handleChangeTask(task: TaskType) {
    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   })
    // );
    dispatch({
      type: 'changed',
      task: task,
    })
  }

  // 작업 삭제 함수: handleDeleteTask
  function handleDeleteTask(taskId: number) {
    // setTasks(tasks.filter((t) => t.id !== taskId));
    dispatch(
      // '액션' 객체
      {
        type: 'deleted',
        id: taskId,
      }
    )
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

import React, { Dispatch, ReactNode, createContext, useContext, useReducer, useRef } from 'react';

//! useReducer를 사용하여 상태를 관리하는 TodoProvider 컴포넌트

// Todo 타입 정의
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// 액션 타입 정의
type TodoAction =
  | { type: 'CREATE'; todo: Todo }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

// 초기 todos 배열
const initialTodos: Todo[] = [
  {
    id: 1,
    text: '프로젝트 생성',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링',
    done: true
  },
  {
    id: 3,
    text: 'Context 생성',
    done: false
  },
  {
    id: 4,
    text: '기능 구현',
    done: false
  },
];

// 리듀서 함수 정의 (상태와 액션을 받아 새로운 상태를 반환)
function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'CREATE':
      // 새로운 todo를 기존의 state에 concat하여 반환
      return state.concat(action.todo);
    case 'TOGGLE':
      // map을 사용하여 특정 id를 가진 항목의 done값을 반전
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      // filter를 사용하여 특정 id를 가진 항목을 제거
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type`);
  }
}

// 컨텍스트 생성 (상태와 디스패치 함수를 담기 위한)
const TodoStateContext = createContext<Todo[] | undefined>(undefined);
const TodoDispatchContext = createContext<Dispatch<TodoAction> | undefined>(undefined);
// nextId 값을 위한 Context
const TodoNextIdContext = createContext<React.MutableRefObject<number> | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

// 컴포넌트 정의 (자식 컴포넌트들에게 컨텍스트 값을 제공)
export function TodoProvider({ children}: TodoProviderProps) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5); // 다음 todo 항목의 id를 관리하기 위한 ref를 생성

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

//? 커스텀 훅 (Todo 상태와 디스패치 함수를 반환)
export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error('TodoProvider not found');
  return state;
}

//?
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('TodoProvider not found');
  return dispatch;
}

//? 
export function useTodoNextId() {
  // useContext 훅을 사용해 nextId ref를 가져옴
  const nextId = useContext(TodoNextIdContext); 
  if (!nextId) throw new Error('TodoProvider not found');
  return nextId;
}
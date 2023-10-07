import React, { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'

// useContext를 사용한 간단한 전역 상태 관리 

// 타입 정의
interface State {
  count: number;
}

interface Action {
  type: 'INCREMENT' | 'DECREMENT';
}

interface CounterProviderProps {
  children: ReactNode;
}

// 리듀서 함수
const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 컨텍스트 생성
const CounterContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
} | undefined>(undefined);

export default function UseContext({ children }: CounterProviderProps ) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

// 커스텀 훅
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}
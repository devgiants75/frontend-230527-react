import React from 'react'
import useCounter from './CustomHook01';

// 커스텀 훅을 사용
export default function CustomCounter() {
  const { count, increment, decrement, reset } = useCounter(0); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

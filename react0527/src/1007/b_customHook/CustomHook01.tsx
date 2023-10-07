import React, { useState } from 'react'

//! 커스텀 훅
// : 여러 컴포넌트 간에 로직을 재사용하기 위한 기능을 제공

// Counter 로직을 가진 커스텀 훅 생성
interface Counter {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export default function CustomHook01(initialCount: number = 0): Counter {

  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);

  return { count, increment, decrement, reset }
}

import React, { useState } from 'react'

//? 배열의 항목 교체하기
// arr[0] = 'bird' (X)
// >> map을 사용하여 교체

// map 호출 내부에서 두 번째 인자로 항목의 인덱스를 전달받아옴.

let initialCounters = [
  0, 0, 0
];

export default function Array03() {
  const [counters, setCounters] = useState<number[]>(initialCounters);

  function handleIncrementClick(index: number) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // 클릭된 카운터를 1 증가
        return c + 1;
      } else {
        // 나머지는 변경되지 않음
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <>
      <ul>
        {counters.map((counter, index) => (
          <li key={index}>
            {counter}
            <button onClick={() => {
              handleIncrementClick(index);
            }}>+1</button>
          </li>
        ))}
      </ul>
    </>
  )
}

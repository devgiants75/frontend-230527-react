import React, { useRef, useState } from 'react'

//! 참조 값을 사용하는 방법
// Ref: 참조(reference)
// 컴포넌트가 어떤 정보(데이터)를 '기억'하고 싶을 때
// 하지만, 그 정보로 새로운 렌더링은 트리거하고 싶지 않을 때 사용

//? 1. 컴포넌트에 ref 추가
// - React에서 useRef Hook을 가져옴.
// - 컴포넌트 내부에서 useRef Hook을 호출
//   : 참조하려는 초기값을 유일한 인자로 전달
// - useRef는 객체를 반환
// {
//   current: 0 // useRef에 전달한 값
// }

//? 2. ref와 상태를 단일 컴포넌트 내에서 조합하여 사용
// 렌더링을 위해 정보가 필요한 경우 - 상태(state)에 정보를 보관

// 이벤트 핸들러에서만 필요한 정보이거나 그 정보의 변경으로 인해 다시 렌더링할 필요가 없는 경우 - ref를 사용하는 것이 더 효율적

//? ref와 state의 차이점
// useRef(initialValue)는 { current: initialValue }을 반환
// useState(initialValue)는 상태 변수의 현재 값을 반환
//  , 상태 설정 함수도 함께 반환 [value, setValue]

// ref는 변경 시 재렌더링 발생 X
// state는 변경 시 재렌더링 발생 O

// ref는 변동이 가능
// - 렌더링 과정 외부에서 current의 값을 수정하고 업데이트 가능
// state는 변동이 불가능
// - 재렌더링을 하기 위해 상태 변수를 수정할 때는 반드시 상태 설정 함수를 사용

// ref는 렌더링 중에 current값을 읽는 것을 권장하지 않음.
// state는 언제든지 상태값을 읽을 수 있음.

export default function Ref01() {
  let ref = useRef<number>(0);
  // 현재 값에 접근하기 위해서는 ref.current를 통해 접근 가능
  // - ref에는 숫자, 문자열, 객체, 함수 모두를 담을 수 있다.
  // - ref는 현재 속성을 읽고 수정할 수 있다.(JS의 객체)

  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  // intervalRef는 setInterval의 ID를 저장하는 데 사용
  const intervalRef = useRef<any>(null);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    // 이전에 시작된 인터벌이 있는 경우 중지
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10) as unknown as number | null;
  }
  
  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed: number = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me!
      </button>
      <hr />
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>

      <button onClick={handleStop}>
        Stop
      </button>
    </>
  )
}

import React, { useRef, useState } from 'react'

//! state를 사용하여 카운터 버튼 생성
// 카운터의 수를 useState로 상태 관리 [count, setCount]
// 버튼을 클릭할 때 마다 카운터의 값을 1씩 증가하는 handleClick 함수
// button태그에 handleClick 함수를 사용
// : 위 요소에 내용으로는 count 상태 변수를 출력
// : 클릭한 횟수: 3회

//! ref를 사용하여 카운터 버튼 생성
// react 내부에서 ref의 동작 방식
// function useRef(initialValue) {
//  const [ref, unused] = useState({ current : initialValue });
//  return ref;
// }

//! ref를 사용할 시기
// - 외부 API와 소통해야할 때 ref를 사용
// Ex. 타임아웃 ID 저장
//     DOM요소를 저장하고 조작
//     , JSX(TSX)를 계산하는데 필요하지 않은 기타 객체 저장

//! ref를 잘 사용하는 방법
// - React 상태의 제한 사항은 ref에 적용되지 X
// - ref는 현재 값을 변형하면 즉시 변경!되기 때문에 상태의 로직과 데이터 흐름을 고려하여 작성

export default function Ref02() {
  // 카운터의 초기값을 0으로 설정
  const [count, setCount] = useState<number>(0);

  let countRef = useRef<number>(0);

  // 버튼을 클릭할 때마다 카운터 값을 1씩 증가
  function handleClick() {
    setCount(count + 1);
  }

  function handleRefClick() {
    // 컴포넌트를 재렌더링 시키지 않는 식
    countRef.current = countRef.current + 1;
  }
  countRef.current = 5;

  return (
    <>
      <hr />
      <button onClick={handleClick}>
        (State)클릭한 횟수: {count}회
      </button>
      <button onClick={handleRefClick}>
        (Ref)클릭한 횟수: {countRef.current}회
      </button>
    </>
  )
}

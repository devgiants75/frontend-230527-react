import React, { useState } from 'react'

//! 상태(State)에서 객체 업데이트

// 상태는 자바스크립트의 어떤 값이든 포함 가능 (객체 포함)
// , React 상태에 들어있는 객체를 직접 변경하는 것은 불가!
// : 새 객체를 생성 or 기존의 객체를 복사한 후, 그 복사본을 사용하여 상태를 설정

export default function Object01() {
  // 변형(mutation)
  // 상태에는 숫자, 문자, 불리언과 같은 자바스크립트의 값을 다룰 수 있다.
  // : 불변 - 변경할 수 없거나, 읽기 전용으로 사용
  // const [x, setX] = useState<number>(0);
  // setX(5);
  // : x상태가 0에서 5로 변경

  // React의 객체 상태는 오류 없이 변경 가능
  // But! 숫자, 문자, 불리언의 원시 타입 처럼 불변으로 취급!
  const [position, setPosition] = useState({
    x: 0, 
    y: 0
  });
  // position.x = 5;

  //! 상태를 읽기 전용으로 취급
  // : 상태에 넣은 JS 객체를 읽기 전용으로 취급

  return (
    <div onPointerMove={e => {
      // position 객체를 직접 변경하려고 하는 경우
      // React 상태는 불변으로 취급되어야 하기 때문에 동작을 인식하지 X
      // : React는 상태 설정 함수를 사용하지 않는 경우 객체의 변경을 인식하지 X
      // position.x = e.clientX;
      // position.y = e.clientY;

      // 새 객체를 생성하고 상태 설정 함수에 전달
      // setPosition이 React에게
      // 1. position이 새 객체로 교체
      // 2. 해당 컴포넌트를 다시 렌더링할 것을 요청
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }}
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh'
    }}>
      <div 
        style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        // 'postion' 상태를 기반으로 점의 위치를 변환
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Image from './Image'
import Clock from './Clock';

//! React의 컴포넌트 렌더링 단계
// : 컴포넌트가 화면에 표시되기 전에 렌더링되어야 한다.

// UI를 요청하고 제공하는 프로세스
// 1. 손님의 주문을 부엌에 전달 - 초기 렌더링 트리거
// 2. 부엌에서 요리를 만들기(주문에 대한 준비) - 컴포넌트 렌더링
// 3. 테이블에 주문을 올림 - DOM 커밋

// 4. 차, 디저트, 음식 추가 주문을 부엌에 전달 - 상태 업데이트 시 재렌더링 트리거

//? 1단계: 렌더링 트리거

// 컴포넌트가 렌더링 되는 두 가지 이유
// - 컴포넌트의 초기 렌더링
// - 컴포넌트(또는 그 상위 항목 중 하나)의 상태가 업데이트

// 1) 초기 렌더링
// 앱이 시작될 때 초기 렌더링을 트리거

// 2) 상태 업데이트 시 재렌더링
// 컴포넌트가 처음 렌더링된 후에는 set함수를 사용하여 상태를 업데이트 
// : 추가 렌더링 트리거

//? 2단계: 컴포넌트 렌더링

// 렌더링
// : React가 컴포넌트를 호출하는 것

// 1) 초기 렌더링
// React는 루트 컴포넌트를 호출

// 2) 상태 업데이트 시 재렌더링
// 트리거한 상태 업데이트의 함수 컴포넌트만을 호출

//? 3단계: DOM 커밋

// 컴포넌트를 렌더링(호출)한 후에는 React가 DOM을 수정
// : React는 렌더링 간에 차이가 있는 경우에만 DOM노드를 변경

// EX) 매 초마다 다른 props가 전달되어 재렌더링하는 컴포넌트
// 같은 선상에 위치한 컴포넌트의 경우 각각의 렌더링이 전달되지 않는다.

function useTime() {
  // 현재 시간을 상태로 관리, 초기값은 현재 시간
  const [time, setTime] = useState(() => new Date());

  // useEffect
  // : 컴포넌트가 렌더링될 때 인터벌(간격)을 설정
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Rendering01() {

  const time = useTime();
  return (
    <>
      <section>
        <h4 style={{ backgroundColor: "pink" }}>조각상</h4>
        <Image />
        <Image />
        <Image />
      </section>
      <Clock time={time.toLocaleTimeString()}/>
    </>
  );
}

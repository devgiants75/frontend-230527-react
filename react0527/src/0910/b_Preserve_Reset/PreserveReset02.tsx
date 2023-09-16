import React, { useState } from 'react'

//! 동일한 위치에서 상태 재설정
// - 컴포넌트가 동일한 위치에 있을 때 상태를 보존 (기본 동작)

//? but, 동일한 위치에서의 컴포넌트 상태를 재설정하는 방법?
// >> 각 Counter의 상태는 DOM에서 제거될 때 마다 초기화
//    버튼을 클릭할 때마다 리셋

// 1. 컴포넌트를 다른 위치에 렌더링

// 2. key를 사용하여 각 컴포넌트에 명시적인 신원(각각의 다른 카운터임을 인식)을 부여
// : React에서 어떤 컴포넌트든 구분을 하기 위해 키 사용 가능
// : key값은 전역적으로 고유하지 X
//    > 부모 내의 위치만 지정

interface CounterProps {
  person: string;
}

// Counter 컴포넌트
const Counter = ({ person }: CounterProps) => {
  // 점수 상태 관리
  const [score, setScore] = useState<number>(0);

  // 마우스 hover 상태 관리
  const [hover, setHover] = useState<boolean>(false);

  // className 초기값 설정
  let className = 'counter';
  // hover 상태가 true면 className에 ' hover' 추가
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      // 마우스 포인터가 올라가면 hover 상태를 true로 설정
      onPointerEnter={() => setHover(true)}
      // 마우스 포인터가 벗어나면 hover 상태를 false로 설정
      onPointerLeave={() => setHover(false)}
    >
      {/* 표시할 플레이어의 이름과 점수 */}
      <h2>{person}'s score: {score}</h2>
      {/* 버튼 클릭 시 점수 상태를 1씩 증가 */}
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  )
}

export default function PreserveReset02() {
  // 현재 플레이어가 A인지 B인지 판별하는 상태
  const [isPlayerA, setIsPlayerA] = useState<boolean>(true);

  return (
    <div>
      {/* 현재 플레이어 상태에 따라 Counter 컴포넌트에 전달할 person 값을 결정 */}
      {/* //! 1. 동일한 위치의 컴포넌트를 분리 */}
      {/* 
      {isPlayerA ? (
        <Counter person='SeungAh' />
      ) : (
        <Counter person='JunGook' />
      )} 
      */}
      {/* {isPlayerA && 
        <Counter person='SeungAh' />
      }
      {!isPlayerA && 
        <Counter person='JunGook' />
      } */}

      {/* isPlayerA의 값에 따라 'SeungAh' 또는 'JunGook'의 Counter 컴포넌트를 렌더링 */}
      {isPlayerA ? (
        <Counter key='SeungAh' person='SeungAh' />
      ) : (
        <Counter key='JunGook' person='JunGook' />
      )} 
      <br />
      {/* 버튼 클릭 시 플레이어 상태를 전달 */}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next Player!
      </button>
    </div>
  )
}

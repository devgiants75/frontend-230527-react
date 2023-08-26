import React, { useState } from 'react'
import { sculptureList } from './data';

//! 1. React Hook
// React에서는 use로 시작하는 모든 함수를 Hook이라고 부름.
// Hooks는 React가 렌더링하는 동안에만 사용할 수 있는 특별한 함수들
// : 리액트의 다양한 기능들을 서로 연결 할 수 있는 기능을 제공

//? Hooks 사용 시 주의점
// use로 시작하는 함수들은 컴포넌트의 최상단 또는 자체 Hooks에서만 호출 가능
// : 조건문, 반복문, 다른 중첩된 함수 내에서는 Hooks를 호출할 수 X
// 파일 최상단에서 import해서 기능들을 사용

interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
}

//? useState 구조
export default function UseState03() {

  // useState 배열 요소 이름 설정: [something, setSomething]
  // useState의 유일한 인자: 상태변수의 초기값

  // index: 저장한 값을 가진 상태 변수
  // setIndex: 상태 변수를 업데이트하고 React에게 컴포넌트를 다시 렌더링하도록 유도하는 상태 설정 함수
  //^ const [index, setIndex] = useState<number>(0);

  // useState 동작 원리
  // 1. 컴포넌트가 처음 렌더링
  // : [0, setIndex] 반환 - React는 0이 최신 상태 값임을 기억
  // 2. 상태를 업데이트
  // : 사용자가 버튼을 클릭 할 경우 setIndex(index + 1)을 호출
  // : 기존의 index가 0이기 때문에 setIndex(1) - React에게 이제 index가 1이라는 것을 기억하고 다시 렌더링할 것을 알림.
  // 3. 컴포넌트가 두 번째 렌더링
  // : React는 여전히 useState(0)를 가지고 있지만,
  // : index를 1로 설정한 것을 기억하기 때문에 [1, setIndex]를 반환

  //! 2. 컴포넌트에 여러 상태 변수 제공
  // : 상태가 서로 관련이 없는 경우에 여러 상태 변수를 가지는 것이 좋음.

  const [index, setIndex] = useState<number>(0);

  // Show Details 버튼을 클릭할 때 전환되는 불린형 showMore
  const [showMore, setShowMore] = useState<boolean>(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture: Sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
        <br />
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )
}

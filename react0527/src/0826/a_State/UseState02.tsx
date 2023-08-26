import React, { useState } from 'react';
import { sculptureList } from './data';


// 상태: 컴포넌트의 특정 메모리
// EX) 현재의 입력 값, 현재의 이미지, 장바구니

interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
}

//! 상태 변수 추가

// 1. 상태 변수를 추가하려면, 파일 상단에서 React에서 useState를 import한다.

export default function useState01() {

  // 2. 상태 변수 사용
  // let index = 0;

  // index: 상태 변수
  // setIndex: 상태 설정 함수
  const [index, setIndex] = useState<number>(0);
  // [] 배열 구조 분해
  // : 배열에서 값을 읽을 수 있다.

  // handlClick 이벤트 핸들러는 로컬 변수인 index를 업데이트 - 화면에 표시되지 X
  function handleClick() {
    // index = index + 1;
    setIndex(index + 1);
  }

  //! useState 훅(Hook)을 사용하여 상태를 업데이트
  // : 렌더링 간에 데이터를 유지하는 상태 변수
  // : 변수를 업데이트하고 React가 컴포넌트를 다시 렌더링하도록하는 상태 설정 함수

  let sculpture: Sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        <br />
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>
        {sculpture.description}
      </p>
    </>
  )
}

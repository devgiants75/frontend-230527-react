import React, { useEffect } from 'react';

//! useEffect
// : 리액트 컴포넌트에서 side effect를 수행하기 위해 사용

// 의존성 배열
// : useEffect의 두 번째 인자로 전달되는 배열(deps)
// : 배열의 요소가 변경될 때 마다 useEffect 내의 코드가 실행

// > 의존성 배열을 비워 둘 경우 마운트, 언마운트 시만 실행
//    , 배열에 변수를 넣으면 해당 변수가 변경될 때 마다 실행

export default function UseEffect() {

  useEffect(() => {
    // 컴포넌트가 마운트 됐을 때 수행
    console.log('Component Mounted!');

    return () => {
      // 컴포넌트가 언마운트 됐을 때 수행
      console.log('Component Will Unmount!');
    };
  }, []);

  return (
    <div>Hello, useEffect!</div>
  )
}

import React from 'react';
import { useCountStateStore } from './stores/count.store';

//! zustand(독일어: 상태)
// : 전역 상태 관리 라이브러리

// zustand 특징
// : 별도의 의존성 없이도 작동, 작은 크기로 빠른 로드 시간을 제공
// : 간단한 API(쉽게 상태를 정의, 사용)
// : 타입스크립트 지원

// zustand 설치
// : npm install zustand

// zustand 사용법
// : 상태 스토어 생성
// : create 함수 사용 - 상태와 메서드를 관리하는 객체를 반환

export default function Zustand01() {

  // 객체 구조 분해 할당으로 zustand에서 가져옴.
  const { count, increase, decrease } = useCountStateStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

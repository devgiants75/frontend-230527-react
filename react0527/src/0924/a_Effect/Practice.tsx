import React, { useEffect } from 'react'

// 타이머 앱
// 시작 버튼을 누르면 타이머 시작
// 1초마다 숫자가 1씩 증가
// 중지 버튼을 누르면 타이머가 중지

// useState, useEffect를 사용해서 구현
export default function Practice() {
  // 상태관리
  // time(시간)
  // isRunning(실행 여부)

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // 실행되고 있다면
    if (isRunning) {
      // interval 변수에 setInterval를 지정
      interval = setInterval(() => {
        setTimeout(prevTime => prevTime + 1);
      }, 1000);
      // 시간 설정 함수(prevTime => prevTime + 1);
      // 두번째 인자로 1000
    }

    return () => {
      clearInterval(interval);
    }
  }); // 종속성 지정

  return (
    <div>
      <h1>Time: {time}</h1>
      <button onClick={}>시작</button>
      <button onClick={}>중지</button>
    </div>
  )
}

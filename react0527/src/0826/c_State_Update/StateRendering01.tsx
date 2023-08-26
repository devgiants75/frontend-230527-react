import React, { useState } from 'react'

//! 상태를 설정이 렌더링 유발
// send 버튼 클릭시 일어나는 동작 순서
// 1. onSubmit 이벤트 핸들러가 실행
// 2. setIsSent(true)는 isSent의 값을 true로 설정, 새로운 변경사항을 전달
// 3. React는 새로운 isSent 값에 따라서 컴포넌트를 재렌더링

// 렌더링은 컴포넌트(함수)를 호출하는 것을 의미
// 이 함수가 반환하는 JSX는 시간에 따른 UI의 스냅샷과 같다.
// 함수의 props, 이벤트 핸들러, 로컬 변수들 모두 렌더링 시점의 상태를 사용하여 계산

// 스냅샷: 마치 사진을 찍듯이 특정 시점에 데이터를 보관하는 기술

function sendMessage(message: string) {
  // ...
}

export default function StateRendering01() {
  const [isSent, setIsSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
}


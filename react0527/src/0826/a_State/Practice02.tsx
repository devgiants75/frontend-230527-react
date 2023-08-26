import React, { useState } from 'react'

export default function Practice02() {

  // isSent 상태에 따라 조건부로 message 상태를 초기화
  const [isSent, setIsSent] = useState<boolean>(false);
  // 반드시 Hook은 컴포넌트의 최상위 수준에서만 호출 가능
  // : 컴포넌트 함수(Hook)의 경우 조건문이나, 반복문과 중첩되어서는 안된다.
  const [message, setMessage] = useState<string>('');

  if (isSent) {
    return <h1>Thank You!</h1>
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: ${message}`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

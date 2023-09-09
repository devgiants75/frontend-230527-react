import React, { useState } from "react";

//! 상태 구조 결정하기

//? 상태 구조화 원칙
//^ 1. 관련된 상태 그룹화: 단일 변수로 병합
// const [x, setX] = useState<number>(0);
// const [y, setY] = useState<number>(0);

// const [position, setPosition] = useState<number>(0);
// >> 여러 상태 변수가 동시에 업데이트 되는 경우에는 단일 변수 사용

//^ 2. 상태의 모순 피하기: 상태 충돌을 방지

//^ 3. 불필요한 상태 피하기
// 컴포넌트의 props나 기존 상태 변수로부터 정보를 렌더링 중에 계산할 수 있는 경우
// : 그 정보를 해당 컴포넌트의 상태에 넣으면 안됨

// 5. 깊게 중첩된 상태 피하기: 상태를 평평하게 구조화

function sendMessage(text: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

export default function StateStructure01() {
  //! 2.
  const [text, setText] = useState<string>("");
  // const [isSending, setIsSending] = useState<boolean>(false);
  // const [isSent, setIsSent] = useState<boolean>(false);
  const [status, setStatus] = useState("typing");

  //! 3.
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  // 렌더링 중에 계산할 변수가 존재하는 경우
  // 상태로 관리 X
  const fullName = `${firstName} ${lastName}`;

  //! 2.
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // setIsSending(true);
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  // 상태 변수가 아니기 때문에 서로 동기화되지 않는다.
  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  //! 3.
  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>How was your vacation?</p>
        <textarea
          disabled={isSending}
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <br />
        <button disabled={isSending} type="submit">
          Send
        </button>
        {isSending && <h3>Sending...</h3>}
      </form>
      <br />
      <br />
      <h2>Let's check you in</h2>
      <label>
        First name:{" "}
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:{" "}
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

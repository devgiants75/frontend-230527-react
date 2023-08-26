import React, { FormEvent, useState } from 'react'


export default function StateRendering02() {
  const [number, setNumber] = useState<number>(0);

  // 시간에 따른 상태
  const [number2, setNumber2] = useState<number>(0);

  // 이벤트 핸들러 타이밍 설정
  const [to, setTo] = useState<string>('JunGook');
  const [message, setMessage] = useState<string>('Hello');
  // React는 한 렌더링의 이벤트 핸들러 내에서 상태 값을 고정으로 유지
  // 코드가 실행되는 동안 변경되는 상태 값은 전달되지 X

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          // 실행 시 +1 증가!
          // 여러 번의 업데이트가 단일 렌더링 사이클에 배치
          // 세번의 setNumber 호출이 모두 동일한 number값에 기반을 두고 있어 1만 증가
          setNumber(number + 1);
          // number가 0이므로 setNumber(0+1).
          // React는 다음 렌더링에서 number를 1로 변경하기 위해 준비
          setNumber(number + 1);
          setNumber(number + 1);
          // 결국 number는 항상 0이므로 상태를 세 번 1로 설정
        }}
      >
        {" "}
        +3{" "}
      </button>

      <br />
      <h1>{number2}</h1>
      <button
        onClick={() => {
          setNumber2(number2 + 5); // 0 + 5
          setTimeout(() => {
            alert(number2); // 0
          }, 3000);
          // alert(number2);
        }}
      >
        {" "}
        +5{" "}
      </button>

      <br />
      <form onSubmit={handleSubmit}>
        <label>
          To:{" "}
          <select
            value={to}
            onChange={(e) => setTo((e.target as HTMLSelectElement).value)}
          >
            <option value="JunGook">JunGook</option>
            <option value="SeungAh">SeungAh</option>
          </select>
        </label>
        <br />
        <textarea placeholder='Message' value={message} onChange={e => setMessage((e.target as HTMLTextAreaElement).value)} />
        <button type='submit'>Send</button>
      </form>
    </>
  );
}

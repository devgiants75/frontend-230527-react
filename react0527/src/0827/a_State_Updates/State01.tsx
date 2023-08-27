import React, { useState } from 'react'

  // 배치 처리
  // : React가 UI에 있는 이벤트 핸들러와 그 안의 모든 코드가 완료될 때까지
  // : 업데이트되지 않는다는 것을 의미

export default function State01() {
  const [number, setNumber] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // setNumber(number + 1); // setNumber(0 + 1) 
        // setNumber(number + 1); // setNumber(0 + 1) 
        // setNumber(number + 1); // setNumber(0 + 1) 

        //? 업데이트 함수
        setNumber(n => n + 1); // n => 0 + 1
        setNumber(n => n + 1); // n => 1 + 1
        setNumber(n => n + 1); // n => 2 + 1
        // n => n + 1
        // : 업데이트 함수
        // 업데이트 함수를 상태 설정자(setNumber)에 전달하면
        // React는 이 함수를 이벤트 핸들러의 다른 모든 코드가 실행된 후 처리되도록 지시
        // 업데이트 함수에 상태 변수 값이 입력되고 그 값은 렌더링 목록에 저장
        // 계속된 업데이트 함수 호출 시 이전 업데이트 함수의 반환 값을 가져와
        // 다음 업데이트의 n으로 전달

        // 업데이터 함수 네이밍 규칙
        // : 함수 인수의 이름은 해당 상태 변수의 첫 글자로 짓는 것이 일반적
        // EX) setLastName(ln => ln.reverse());
        // EX) setCount(c => c * 2);
      }}>
        +3
      </button>
      {/* 상태를 업데이트 한 후 상태 교체 */}
      <h1>{number2}</h1>
      <button onClick={() => {
        // number2가 0이므로 아래 작업에서 React는 렌더링 대기열(큐)에 "5로 교체" 추가
        setNumber2(number2 + 5);

        // 업데이터 함수, React는 해당 함수를 렌더링 대기열(큐)에 추가
        setNumber2(n => n + 1);
        // React는 최종 결과로 6을 저장하고 useState에서 반환

        setNumber2(20); // React는 큐에 "20으로 교체"를 추가

        // 상태 설정 함수에 전달하는 내용들은 큐에 저장이 되고 
        // 렌더링 시점에는 최종적인 결과값만을 출력: 배치 처리
      }}>
        Increase the number
      </button>
    </>
  )
}

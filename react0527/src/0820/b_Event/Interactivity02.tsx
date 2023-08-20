import React from 'react'

// 이벤트 핸들러 추가

export default function Interactivity02() {
  // 2. handleClick이라는 함수를 선언
  // 3. handleClick 로직을 구현
  function handleClick() {
    alert('You clicked Me!')
  }

  //! 이벤트 핸들러 함수
  // - 보통 컴포넌트 내부에서 정의
  // - 'handle'로 시작, 그 뒤에 이벤트 이름이 작성
  // - 관례적으로 이벤트 핸들러의 이름을 이벤트 이름 뒤에 'handle'을 붙여서 지정
  // EX) onClick={handleClick}, onMouseEnter={handleMouseEnter}

  //? 주의사항
  // 1. 이벤트 핸들러에 전달되는 함수는 호출되지 않아야 한다.
  // 함수 전달(O): onClick={handleClick}
  // 함수 호출(X): onClick={handleClick()}
  // - 함수명 뒤에 따라오는 ()소괄호는 어떤 클릭도 없이 렌더링 중에 함수를 즉시 실행

  // 2. 인라인으로 코드를 작성하는 경우 전달 형식으로 작성해야 한다.
  // 함수 전달(O): <button onClick={() => alert('...')}> // 익명함수로 래핑
  // 함수 호출(X): <button onClick={alert('...')}>

  return (
    <>
      {/* 1. 아무런 기능이 없는 버튼 생성 */}
      <h3>1. 이벤트 핸들러 추가</h3>
      {/* 4. JSX에 onClick이벤트로 handleClick 함수를 전달 */}
      <button onClick={handleClick}>Click Me</button>
      <br />
      <button onClick={function handleClick() {
        alert('JSX 내부에 인라인으로 이벤트 핸들러 정의')
      }}>인라인 이벤트 핸들러</button>
      <br />
      <button onClick={() => {
        alert('화살표 함수로 JSX 내부에 더 간결하게 이벤트 핸들러 정의')
      }}>화살표 함수</button>
      <br />
      <button>I don't do anything</button>
    </>
  )
}

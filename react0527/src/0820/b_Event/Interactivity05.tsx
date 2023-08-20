import React from 'react'

//! 이벤트 전파(버블링)
// : 이벤트가 발생한 곳에서 시작하여 트리를 따라 위로 올라가는 형식

//! 전파 중지
// 이벤트 핸들러는 이벤트 객체를 유일한 인자로 전달받는다.
// 관례적으로 '이벤트'를 의미하는 'e'로 불림.
// : 해당 객체를 사용하여 이벤트에 대한 정보를 읽는 것이 가능

//!
// e.stopPropagation(): 위의 태그(부모)에 연결된 이벤트 핸들러의 실행을 중지
// e.preventDefault(): 몇 가지 이벤트에 대한 기본 브라우저 동작을 방지

export default function Interactivity05() {
  return (
    <>
      <h3>5. 이벤트 전파 & 전파 중지 & 기본 동작 방지</h3>
      {/* 어느 버튼이든 클릭하면 해당 버튼의 onClick이 먼저 실행되고, 그 다음에 부모 div의 onClick이 실행 */}
      <div
        className="Toolbar"
        onClick={() => {
          alert("You Clicked on the toolbar!");
        }}
        style={{ backgroundColor: 'grey', padding: '10px'}}
      >
        <button
          // 이벤트 객체를 받을 경우 인자를 포함하는 소괄호를 생략하고 작성 가능
          onClick={e => {
            // 이벤트가 부모 컴포넌트에 도달하는 것을 방지
            e.stopPropagation();
            alert("Playing");
          }}
        >
          Play Movie
        </button>
        <button
          onClick={() => {
            alert("Uploading");
          }}
        >
          Upload Image
        </button>
      </div>
      <div>
        {/* 
        일부 브라우저 이벤트에는 내장된 기본 동작이 있다. 
        EX) form 제출 이벤트는 내부 버튼을 클릭할 때 발생 
            - 기본적으로 전체 페이지를 다시 로드
        */}
        {/* 
        내장된 기본 동작을 없애주는 이벤트 객체의 내장 함수
        e.preventDefault() 이벤트 객체를 호출하여 방지 가능
         */}
        <form onSubmit={event => 
          {
            event.preventDefault();
            alert('Submitting!')}
          }>
          <input type="text" />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

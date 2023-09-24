import React, { useImperativeHandle, useRef, forwardRef } from "react";

//! React에서 ref를 연결하는 시점
// - React의 업데이트(2가지)

// 1. 렌더링 중에 React는 화면에 무엇이 나와야 하는지 파악하기 위해 컴포넌트를 호출

// 2. 커밋 중에 React는 DOM에 변경사항을 적용

// DomRef03의 MyInput은 DOM 입력 요소를 노출
// 부모컴포넌트가 다른 작업 수행 시 (EX. CSS 스타일 변경)
// 노출된 기능을 제한하고 싶은 경우
// : useImperativeHandle을 사용

// Input의 props 타입 정의
interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// Ref로 노출될 객채의 타입 정의
interface MyInputHandle {
  focus: () => void;
}

const MyInput = forwardRef<MyInputHandle, MyInputProps>((props, ref) => {
  // 실제 input 요소에 대한 ref 설정
  const realInputRef = useRef<HTMLInputElement>(null);

  // 부모로부터 전달받은 ref에 focus 메서드만 노출
  //? React에게 부모 컴포넌트의 ref 값으로 사용자가 직접 정의한
  //? 특별한 객체를 갖도록 지시
  useImperativeHandle(ref, () => ({
    focus() {
      if (realInputRef.current) {
        realInputRef.current.focus();
      }
    }
  }));

  // 실제 input 요소 렌더링
  return <input {...props} ref={realInputRef} />;
});

const DomRef04 = () => {
  // MyInput 컴포넌트에 대한 ref 설정
  const inputRef = useRef<MyInputHandle>(null);

  function handleClick() {
    if (inputRef.current) {
      // inputRef.current는 focus 메서드만을 가지고 있다.
      inputRef.current.focus();
    }
  }

  // MyInput과 버튼 렌더링
  return (
    <>
      <hr />
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input02
      </button>
    </>
  )
}

export default DomRef04;

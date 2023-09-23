import React, { InputHTMLAttributes, forwardRef, useRef } from 'react'

//! 다른 컴포넌트의 DOM 노드에 접근

// MyInput 컴포넌트는 props와 함께 전달된 ref를 내부의 
// input 요소로 전달

// MyInput 컴포넌트는 forwordRef를 사용하여 선언
// 위 Ref를 통해 inputRef에 두 번째 인수로 ref를 전달 받도록 설정
// MyInput 자체는 받은 ref 를 내부의 input 태그에 전달
const MyInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function DomRef03() {
  // useRef를 사용하여 input 요소의 참조를 저장
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <>
      <hr />
      {/* MyInput 컴포넌트에 ref를 전달하여 DOM요소에 접근 */}
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  )
}

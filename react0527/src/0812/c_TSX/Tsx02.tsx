import React from 'react'

// JSX/TSX의 중괄호
// JSX(HTML 영역) 내에서 중괄호를 사용하여 JS문법을 작성

//! JSX에 문자열 전달
// : JSX 문자열 속성을 전달하려면 따옴표로 묶어서 전달
// : 속성을 동적으로 지정하기 위해서는 {}로 감싸서 사용

// : 함수 호출을 포함한 모든 JS/TS 표현식(문법)은 중괄호 사이에서 작동! 

export default function Tsx02() {
  const name = "choco";
  const src = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg";
  const alter = "고양이 이미지";
  return (
    <>
      <h1>{name} is very cute cat</h1>
      <img
      // 변수 사용 시 {}중괄호로 감싸서 사용
        src={src}
        alt={alter}
        style={{ width: "300px" }}
      />
    </>
  );
}

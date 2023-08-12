import React from 'react'

// AImage 컴포넌트 생성
// 컴포넌트(구성 요소) 빌드하는 방법
// 1. 구성 요소 내보내기
// - 다른 파일 또는 다른 함수 사용할 수 있도록 파일의 기본 기능 표시
// 2. 함수 정의
// - function AImage와 같이 React의 구성요소는 일반 JS함수
// - 함수명을 항상! 대문자로 시작
function Puppy() {
  return (
    <>
      <img
        src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
        alt="강아지 이미지"
        style={{ width: "300px" }}
      />
      <img
        src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
        alt="강아지 이미지"
        style={{ width: "300px" }}
      />
    </>
  );
    // 마크업 추가(HTML 요소)
    // HTML과 유사하지만 실제로는 JS로 작동 - 해당 구문을 JSX/TSX라고 불림.
    // JSX: JS 내부에서 마크업을 삽입할 수 있는 문법
    
    // 구성 요소의 마크업은 모두 한 줄에 작성 가능
    // 마크업이 모두 한 줄에 작성이 불가하다면 return문 안에서 ()소괄호로 묶여야만 한다.
    // 여러 줄을 표현할 때, 소괄호를 생략할 경우 return문 자체가 무시
}

export default function Images() {
  return (
    // section태그 - 소문자
    // : React가 HTML 태그를 참조하는 것으로 인식
    <section>
      <h1>Cute Puppies</h1>
      {/* Puppy태그 - 대문자 */}
      {/* : React가 컴포넌트(구성 요소)를 참조하는 것으로 인식 */}
      {/* 컴포넌트는 사용할 함수 내에서 정의 X, 외부(함수 밖, 별도의 모듈)에서 정의해서 가져오기를 통해 사용 */}
      <Puppy />
      <Puppy />
      <Puppy />
    </section>
  )
}

// 컴포넌트: 구성 요소
// - UI(HTML) 블록

<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Componet</li>
    <li>Using a Component</li>
  </ol>
</article>


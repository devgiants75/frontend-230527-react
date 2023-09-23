import React, { useRef } from 'react'

//! Dom을 Refs로 조작

//? 1. 노드에 대한 ref를 가져오기
// 컴포넌트 내부에서 ref를 선언 (inputRef)
// DOM노드를 얻고자 하는 JSX태그에 ref 속성으로 ref를 전달

// EX. 1. 텍스트 입력에 포커스

// EX. 2. 요소를 스크롤

export default function DomRef01() {
  // 1. 텍스트 입력에 포커스
  const inputRef = useRef<HTMLInputElement>(null);

  // 2. 요소 스크롤
  // 세 고양이 이미지에 대한 참조를 각각 생성
  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  // 요소 스크롤 이벤트 핸들러 정의
  // 첫 번째 고양이 이미지로 스크롤 하는 이벤트 핸들러를 정의
  function handleScrollToFirstCat() {
    // scrollIntoView 메서드
    // : 요소가 보이도록 요소를 스크롤하는 메서드
    firstCatRef.current?.scrollIntoView({
      behavior: 'smooth', // 스크롤의 동작을 부드럽게 넘어가도록 지정
      block: 'nearest', // 수직 위치를 어떻게 처리할지 결정
      inline: 'center' // 수평 위치를 어떻게 처리할지 결정
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center' 
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center' 
    });
  }

  return (
    <>
      {/* input 요소에 inputRef를 연결 */}
      <h2>1. 텍스트 입력에 포커스</h2>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
      <hr />
      <h2>2. 요소 스크롤(Carousel 캐러셀 만들기)</h2>
      {/* 각 버튼은 각 고양이 이미지로 스크롤하는 함수를 호출 */}
      <nav style={{ textAlign: "center" }}>
        <button onClick={handleScrollToFirstCat}>First Cat</button>
        <button onClick={handleScrollToSecondCat}>Second Cat</button>
        <button onClick={handleScrollToThirdCat}>Third Cat</button>
      </nav>
      <div style={{ width: '100%', overflow: 'hidden'}}>
        {/* 각 고양이 이미지에 해당하는 참조(ref)를 연결 */}
        <ul style={{ listStyle: "none", paddingInlineStart: '20px', display: 'flex' }}>
          <li style={{ display: 'inline' }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg"
              alt="First"
              ref={firstCatRef}
              width='300px'
              height='200px'
            />
          </li>
          <li style={{ display: 'inline' }}>
            <img
              src="https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_640.jpg"
              alt="Second"
              ref={secondCatRef}
              width='300px'
              height='200px'
            />
          </li>
          <li style={{ display: 'inline' }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_640.jpg"
              alt="Third"
              ref={thirdCatRef}
              width='300px'
              height='200px'
            />
          </li>
        </ul>
      </div>
    </>
  );
}

import React from 'react'
// JSX/TSX로 마크업 작성
// JSX: JS파일 내에서 HTML과 유사한 마크업을 작성, JS용 구문 확장
// JSX: HTML보다 더 엄격한 XML 버전을 사용

// babel: XML 형태로 작성된 코드를 JS로 변환

export default function Tsx01() {
  return (
    //! 1. JSX 식에는 부모 요소가 하나 있어야 합니다.
    // 보통 fragment(프래그먼트)라고 불리는 빈 태그 사이에 태그들을 래핑.
    // : 브라우저 HTML 트리에 흔적을 남기지 않고 항목을 그룹화
    <>
      <p className='hello'>안녕하세요</p>
      <p className='hi'>만나서 반갑습니다.</p>
      안녕하세요 
      {/*//! 2. JSX에서는 태그가 명시적으로 닫혀있어야 합니다.  */}
      {/* 
      img태그, br태그 등의 단일 태그 또한 명시적으로 닫혀있어야 한다. 
      Self Closing 태그를 사용!
      */}
      <br />
      만나서 반갑습니다.
      {/* //! 3. 카멜케이스 명명규칙 사용 */}
      {/* css에서 background-color -> react에서 backgroundColor */}
      {/* //! 4. class 선택자 사용 시 -> className 사용 */}
      {/* 리액트에서 class는 예약어로 사용되기 때문에 Dom 속성에 있는 className 으로 사용! */}
      <div className='camelCase' style={{ backgroundColor: 'grey' }}>카멜케이스를 사용하세요!</div>
      {/* //! 5. 주석 */}
      {/* 
      HTML 주석을 중괄호 안에서 작성! 
      중괄호 안에 작성하지 않을 경우 화면에 보임!
      */}
    </>
  )
}

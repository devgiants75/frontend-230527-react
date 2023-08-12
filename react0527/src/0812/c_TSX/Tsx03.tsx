import React from 'react'

const today: Date = new Date();

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(
    'en-US', { weekday: 'long'}
    ).format(date);
  }
  
  export default function Tsx03() {
  // 중괄호 사용 위치
  //! 1. JSX 태그 내부의 텍스트로 사용
  const name = "이승아";
  //! 2. 기호(=) 바로 뒤에 오는 속성 값으로 사용
  const alter = "대체 문구";
  //! 3. JSX의 인라인 CSS 스타일 사용 시 중괄호 2개의 쌍으로 객체를 감싸서 전달
  return (
    <>
      <div>{name}</div>
      <h1>To Do List for {formatDate(today)}</h1>
      <img
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
        alt={alter}
        style={
          { 
          width: '300px', 
          borderRadius: '50px' 
          }
        }
      />
    </>
  );
}

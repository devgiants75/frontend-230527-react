import React from 'react'

// JS 객체를 중괄호로 사용
// : 여러 표현식을 하나의 객체로 묶고
// : , JSX문법 내에서 중괄호를 사용하여 해당 객체에 참조

//^ 사용자의 테마 설정
type Theme = {
  backgroundColor: string;
  color: string;
};

//^ 이름과 테마설정을 가진 사용자를 나타냄
type Person = {
  name: string;
  theme: Theme;
};

const person: Person = {
  name: 'Lee Seung Ah',
  theme: {
    backgroundColor: 'pink',
    color: 'black'
  }
};

export default function Tsx04() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <p>1. 강의자료 준비하기</p>
      <p>2. 휴가 계획 세우기</p>
    </div>
  )
}

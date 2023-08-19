import React from 'react'

//! 리스트 렌더링
// - JS의 배열 메서드를 사용하여 데이터 배열을 조작
// - filter(), map()을 사용해서 데이터 배열을 컴포넌트 배열로 필터링하고 변환하는 방법


//! 1. 배열로부터 데이터 렌더링: map()

// eslint-disable-next-line no-lone-blocks
{/* 
<ul>
  <li>Person1 : mathematician</li>
  <li>Person2 : chemist</li>
  <li>Person3 : physicist</li>
  <li>Person4 : chemist</li>
  <li>Person5 : astrophysicist</li>
</ul> 
*/}

type Person = {
  person: string
}

// 1. 데이터를 배열로 이동
const people: Person[] = [
  {person: 'Person1 : mathematician'},
  {person: 'Person2 : chemist'},
  {person: 'Person3 : physicist'},
  {person: 'Person4 : chemist'},
  {person: 'Person5 : astrophysicist'},
]

const animals = ['dog', 'cat', 'lion', 'tiger', 'hippo']

const RenderingList01 = () => {
  const listItems = people.map((people) => (
    <li>{people.person}</li>
  ));

  const animalItems = animals.map(animal => 
    // 목록의 각 자식요소에는 고유한 'key'prop이 있어야 한다.
      <li>{animal}</li>
    )
  return (
    <>
      <div>{listItems}</div>
      <br />
      <div>{animalItems}</div>
    </>
  )
}

export default RenderingList01
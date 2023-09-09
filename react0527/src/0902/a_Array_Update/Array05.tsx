import React, { useState } from 'react'

//? 배열을 정렬하고 싶은 경우

let nextId = 3;
const initialList = [
  { id: 0, title: 'hello'},
  { id: 1, title: 'hi'},
  { id: 2, title: 'Okay'},
];

interface List {
  id: number;
  title: string;
}

export default function Array05() {
  const [list, setList] = useState<List[]>(initialList);

  function handleClick() {
    // list 배열의 순서를 뒤집기
    const nextList = [...list]; // 기존 배열을 복사
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(list => (
          <li key={list.id}>{list.title}</li>
        ))}
      </ul>
    </>
  )
}

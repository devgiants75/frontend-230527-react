import React from 'react'

//! 1.
// Pracitce 함수형 컴포넌트에서 작성
// : props로 username(사용자 이름) 받아온다.
// 컴포넌트는 h2태그로 username을 표시
// 컴포넌트에는 Hello라는 버튼이 있다.

// Hello버튼 클릭 시 alert로 Hello, [username] 메시지를 표시

//! 2.
// Practice 함수형 컴포넌트에서 작성
// : props로 number를 받아온다.
// p태그를 사용해서 You selected: [number] 메시지 출력
// 숫자 1부터 5까지의 버튼을 생성
// 각 버튼을 클릭할 때마다 해당 숫자를 alert로 표시

interface PracticeProps {
  username?: string;
  number?: number;
}

export default function Practice({ username, number }: PracticeProps) {
  const handleClick = () => {
    alert(`Hello, ${username}`);
  }

  const handleNumberClick = (selectedNumber: number) => {
    alert(`You clicked: ${selectedNumber}`);
  }

  const arr = [1, 2, 3, 4, 5];

  const handleColorChangeClick = () => {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'pink';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <>
      <h3>실습 예제</h3>
      <div>
        <h2>{username}</h2>
        <button onClick={handleClick}>Hello</button>
      </div>
      <div>
        <p>You Selected: {number}</p>
        {arr.map(num => (
          <button key={num} onClick={() => handleNumberClick(num)}>{num}</button>
        ))}
      </div>
      <div>
        <button onClick={handleColorChangeClick}>Toggle the lights</button>
      </div>
    </>
  )
}

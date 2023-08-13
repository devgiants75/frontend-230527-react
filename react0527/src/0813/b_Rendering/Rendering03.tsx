import React from 'react'

//! 논리 AND 연산자(&&)를 사용한 조건부 렌더링
// : 조건이 참일 때 일부 TSX(JSX)를 렌더링하거나,
// : 그렇지 않으면 아무것도 렌더링하지 않을 때 사용

type ItemProps = {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  // AND 연산자를 사용한 조건부 렌더링
  return (
    // isPacked가 참일 경우에만 체크마크를 렌더링
    // 만약 isPacked가 false라면 렌더링 되지 않도록 구현
    <li className='item'>
      {name} {isPacked && ' ✔'}
    </li>
  );
}

// AND연산자의 좌항에는 반드시 boolean타입을 작성해야만
// 조건부 렌더링을 사용할 수 있음.
// messageCount && <p>New Messages</p> (X)
// messageCount > 0 && <p>New Messages</p> (O)

export default function Rendering03() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item 
          name='cup'
          isPacked={true}
        />
        <Item 
          name='coffee'
          isPacked={true}
        />
        <Item 
          name='snack'
          isPacked={false}
        />
      </ul>
    </section>
  )
}

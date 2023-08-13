import React from 'react'

//! TSX(JSX)를 변수에 조건부로 할당

type ItemProps = {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {

  let itemContent = name;
  
  // if문을 사용하여 TSX(JSX)표현식을 itemContent에 재할당
  if (isPacked) {
    itemContent = name + " ✔";
  }

  return (
    <li className='item'>
      {itemContent}
    </li>
  )
}

export default function Rendering04() {
  return (
    <section>
      <h1>
        My Packing List - TSX변수에 조건부 할당
      </h1>
      <ul>
        <Item 
          name='phone'
          isPacked={true}
        />
        <Item 
          name='bag'
          isPacked={false}
        />
        <Item 
          name='money'
          isPacked={false}
        />
      </ul>
    </section>
  )
}

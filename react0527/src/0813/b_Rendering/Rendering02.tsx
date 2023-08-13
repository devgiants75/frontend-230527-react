import React from 'react'

// 조건부(삼항)연산자를 사용한 렌더링
// if (isPacked) {
//   return <li className='item'>{name} ✔</li>
// }
// return <li className='item'>{name}</li>

type ItemProps = {
  name: string;
  isPacked: boolean;
}

// function Item({ name, isPacked }: ItemProps) {
//   삼항 연산자를 사용한 조건부 렌더링
//   return (
//     <li className='item'>
//       {isPacked ? name + ' ✔' : name}
//     </li>
//   );
// }


// 완료된 항목의 텍스트를 <del>태그로 감싸서 취소선을 추가
function Item({ name, isPacked }: ItemProps) {
  // 삼항 연산자를 사용한 조건부 렌더링
  return (
    <li className='item'>
      {isPacked ? (
        <del>
          {name + ' ✔' }
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function Render02() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item 
          name='food'
          isPacked={true}
        />
        <Item 
          name='clothes'
          isPacked={true}
        />
        <Item 
          name='shoes'
          isPacked={false}
        />
      </ul>
    </section>
  )
}

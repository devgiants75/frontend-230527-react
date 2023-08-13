import React from 'react'

// 조건부 렌더링(Conditional Rendering)
// : 특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미
// if문, &&연산자, ?:(삼항)연산자

//! 조건부 TSX(JSX) 반환

type ItemProps = {
  name: string;
  isPacked: boolean;
};

// function Item({ name, isPacked }: ItemProps) {
  //   return <li className='item'>{name}</li>;
  // }
  
//! if문을 사용한 조건부 렌더링
// 이모지: 윈도우 키 + .
// 패킹된(챙겨진) 물품 이름 옆에는 ✔ 체크 표시를 추가
// function Item({ name, isPacked }: ItemProps) {
//   if (isPacked) {
//     return <li className='item'>{name} ✔</li>
//   }
//   return <li className='item'>{name}</li>;
// }

//! 조건부로 아무것도 반환하지 않기: null 사용
// 실제로 많이 사용X, 
// 부모 컴포넌트의 TSX(JSX)에서 컴포넌트를 조건부로 포함하거나 제외
function Item({ name, isPacked }: ItemProps) {
  if (isPacked) { // isPacked가 true인 경우
    return null // 컴포넌트는 아무것도 반환하지않고, null을 반환
  }
  // 그렇지 않은 경우 TSX 반환
  return <li className='item'>{name}</li>; 
}

export default function Rendering01() {
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

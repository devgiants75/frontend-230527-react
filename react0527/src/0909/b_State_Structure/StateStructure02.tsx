import React, { useState } from 'react'

//^ 4. 상태의 중복 피하기

// 메뉴 목록 컴포넌트
// 여러 개 중에서 단일 여행 간식을 선택

//? 해당 스낵의 이름을 변경 가능하도록 지정
// 이름 변경 시 아래의 메시지에 들어있는 스낵 이름도 같이 변경
// Choose 기능은 그대로 작성

// initialItems의 타입을 지정
// 지정한 타입을 initialItems 데이터에 적용

interface Item {
  title: string;
  id: number;
}

const initialItems: Item[] = [
  {title: 'pretzels', id: 0},
  {title: 'crispy seaweed', id: 1},
  {title: 'granola bar', id: 2}
]

export default function StateStructrue02() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [selectedItemId, setSelectedItemId] = useState<number>(0);

  const selectedItem = items.find(item => item.id === selectedItemId);

  function handleItemChange(id: number, e: React.ChangeEvent<HTMLInputElement>) {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      }
      return item;
    }))
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input type="text" value={item.title} onChange={e => handleItemChange(item.id, e)} />
            {' '}
            <button onClick={() => {
              setSelectedItemId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <h2>You picked {selectedItem?.title}</h2>
    </>
  )
}

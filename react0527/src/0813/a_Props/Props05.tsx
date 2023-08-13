import React, { useState } from 'react'
import Clock from './Clock'

// Clock 부모 컴포넌트로 부터 두 개의 props 전달 받아 사용
// 부모 컴포넌트는 해당 props를 전달

export default function Props05() {

  // useTime 함수(훅)를 사용하여 현재 시간 가져오기
  const time = '20230813';
  // color라는 상태를 정의하고 초기값을 'lightcoral'로 설정
  const [color, setColor] = useState<string>('lightcoral');

  return (
    <div>
      <p>
        {/* 사용자에게 색상을 선택할 수 있는 dropdown 메뉴를 작성 */}
        Pick a color: {' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">LightCoral</option>
          <option value="midnightblue">Midnightblue</option>
          <option value="yellow">Yellow</option>
        </select>
        {/* Clock 컴포넌트를 렌더링, 선택된 color와 현재 시간을 props로 전달 */}
        <Clock color={color} time={time}/>
      </p>
    </div>
  )
}

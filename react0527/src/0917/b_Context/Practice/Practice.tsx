import React from 'react'
import { PlaceType } from './Type'
import { places } from './Data';

//! 체크박스를 토글하면 각 <PlaceImage>에 전달되는 imageSize prop이 변경
// 체크박스의 상태는 최상위 Practice컴포넌트에서 유지
// 각 <PlaceImage>는 이를 알고 있어야 한다.

// 전달형식의 prop을 제거 
// context.ts에서 Practice 컴포넌트에서 PlaceImage로 직접 전달

export default function Practice() {
  // 이미지 크기를 결정하는 isLarge 상태를 정의(useState, false)

  // imageSize 상수(number)
  // : isLarge 가 참 150, 거짓 100

  return (
    <>
      <label>
        <input 
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      {/* List 컴포넌트에 imageSize를 전달 */}
      <List imageSize={imageSize}/>
    </>
  )
}

// imageSize를 prop으로 받는 List 컴포넌트
function List({ imageSize }: { imageSize: number}) {
  // 장소를 나열하여 화면에 표시
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place 
        place={place}
        imageSize={imageSize}
      />
    </li>  
  )
}

// Place 컴포넌트는 각 장소와 이미지 크기를 prop으로 전달받기

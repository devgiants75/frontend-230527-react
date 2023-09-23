import React, { useContext, useState } from 'react'
import { PlaceType } from './Type'
import { places } from './Data';
import { ImageSizeContext } from './Context';
import { getImageUrl } from './Utils';

//! 체크박스를 토글하면 각 <PlaceImage>에 전달되는 imageSize prop이 변경
// 체크박스의 상태는 최상위 Practice컴포넌트에서 유지
// 각 <PlaceImage>는 이를 알고 있어야 한다.

// 전달형식의 prop을 제거 
// context.ts에서 Practice 컴포넌트에서 PlaceImage로 직접 전달

// Practice 컴포넌트는 사용자가 대형 이미지를 사용할 것인지를 결정하는 체크박스와
// 이미지 목록을 표시하는 List 컴포넌트를 포함

export default function Practice() {
  // 이미지 크기를 결정하는 isLarge 상태를 정의(useState, false)
  const [isLarge, setIsLarge] = useState<boolean>(false);

  // imageSize 상수(number)
  // : isLarge 가 참 150, 거짓 100
  const imageSize: number = isLarge ? 150 : 100;

  // List 컴포넌트를
  // <ImageSizeContext.Provider value={imageSize}>로 감싸서
  // 값을 아래로 전달
  // PlaceImage에서는 useContext(ImageSizeContext)를 사용하여 그 값을 읽어옴.
  return (
    <>
      <ImageSizeContext.Provider value={imageSize}>
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
        <List />
      </ImageSizeContext.Provider>
    </>
  )
}

// List 컴포넌트는 places 데이터를 사용하여 
//  여러 Place 컴포넌트를 목록으로 표시
function List() {
  // 장소를 나열하여 화면에 표시
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place place={place} />
    </li>  
  );

  return <ul>{listItems}</ul>;
}

type PlaceProps = {
  place: PlaceType;
}

// Place 컴포넌트는 이미지와 장소의 이름 및 설명을 표시
function Place({ place }: PlaceProps) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  )
}

// PlaceImage 컴포넌트는 주어진 장소의 이미지를 표시
function PlaceImage({ place }: PlaceProps ) {
  const imageSize = useContext<number>(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
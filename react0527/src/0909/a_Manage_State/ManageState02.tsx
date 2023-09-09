import React, { useState } from 'react'

// 1. 해당 컴포넌트의 시각적 상태 설정
// - 이미지가 활성 상태일 때
// - 이미지가 비활성 상태일 때 

// 2. 이미지가 활성 상태인지 여부를 기억하기 위해 단일 boolean 상태 변수를 지정

export default function ManageState02() {
  const [isActive, setIsActive] = useState<boolean>(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';

  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        src="https://i.imgur.com/5qwVYb1.jpeg"
        alt="Rainbow houses"
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
      />
    </div>
  );
}

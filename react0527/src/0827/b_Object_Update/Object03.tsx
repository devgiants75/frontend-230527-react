import React, { ChangeEvent, useState } from 'react'
import { useImmer } from 'use-immer';

//! 중첩된 객체 업데이트

type Person = {
  name: string;
  artwork: {
    title: string;
    city: string;
    image: string;
  };
};

//! Immer을 사용하여 간결한 업데이트 로직 작성
// Immer 
// : 변이하는 문법을 사용하여 작성 - 복사본을 생성해주는 라이브러리
// : 객체를 변이하고 있는 것처럼 보이는 코드를 작성 가능

//? Immer 사용법
// Immer을 의존성으로 추가
// : npm install use-immer

// import { useImmer } from 'use-immer'

export default function Object03() {
  // const [person, setPerson] = useState<Person>({
  //   name: 'Seung Ah Lee',
  //   artwork: {
  //     title: '안녕',
  //     city: 'Seoul',
  //     image: 'https://i.imgur.com/SdlAgUOm.jpg'
  //   }
  // });
    const [person, setPerson] = useImmer<Person>({
    name: 'Seung Ah Lee',
    artwork: {
      title: '안녕',
      city: 'Seoul',
      image: 'https://i.imgur.com/SdlAgUOm.jpg'
    }
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value
      }
    })
  }

  
  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    // dreft
    // : Immer에서 제공하는 Proxy라는 특별한 유형의 객체
    // : 해당 위치에서 draft가 가지는 작업을 기록
    // Immer은 draft의 어떤 부분이 변경되었는지 파악
    // , 수정 사항이 포함된 완전히 새로운 객체를 생성
    setPerson(draft => {
      draft.name = e.target.value
    })
  }
  
  // Immer을 사용한 단일 핸들러
  // 동적 프로퍼티 접근이 React의 typeScript 컴파일러가 타입 오류를 생성
  // : 각 입력 필드를 처리하는 별도의 함수를 생성하여 사용

  return (
    <>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          name="title"
          type="text"
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <label>
        city: 
        <input
          name="city"
          type="text"
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <label>
        image:
        <input
          name="image"
          type="text"
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <p>
        <i>{person.artwork.title}</i>
        <br />
        {' by '} {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

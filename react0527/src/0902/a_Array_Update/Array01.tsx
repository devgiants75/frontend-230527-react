import React, { useState } from 'react'

//! 상태의 배열 업데이트

// JS: 배열 변경 가능
// but! 상태에 저장할 때는 배열을 불변으로 취급!

// 상태에 저장된 배열을 업데이트 할 경우
// : 새로운 배열을 생성 | 기존 배열의 복사본을 만들어서 사용

//! 1. 변경 없이 배열 업데이트
// arr[0] = 'bird' (X)
// : 배열 내의 항목을 재할당 불가
// : 배열을 변경하는 메소드(push(), pop()) 사용 불가

//? React 내에서 배열을 다룰 때 사용할 수 있는 함수
// 추가: concat, [...arr] 스프레드 문법 (X: push, unshift)
// 제거: filter, slice (X: pop, shift, splice)
// 수정: map (X: splice)
// 정렬: 배열을 복사 (X: reverse, sort)

//? 배열에 추가
// : 스프레드 구문 사용

//? 배열에서 제거
// : 제거할 해당 항목을 필터링하는 것

interface Artists {
  id: number;
  name: string;
}

let nextId: number = 0;

let initialArtists = [
  { id: 0, name: 'SeungAh'},
  { id: 1, name: 'DoKyung'},
  { id: 2, name: 'JunGook'}
]

export default function Array01() {

  const [name, setName] = useState<string>('');
  const [artists, setArtists] = useState<Artists[]>([]);

  const [artists2, setArtists2] = useState<Artists[]>(initialArtists);

  return (
    <>
      <h2>배열에 값 추가 하기</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          // { id: nextId, name: name}, - unshift() 작업 수행 (값을 제일 앞에 추가)
          ...artists,
          { id: nextId, name: name} // - push() 작업 수행 (값을 제일 뒤에 추가)
        ])
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      <br />
      <h2>배열에 값 제거하기</h2>
      <ul>
        {artists2.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists2(artists2.filter(a => a.id !== artist.id));
              // artist.id와 다른 ID를 가진 아티스트들로 구성된 배열을 생성
              // filter가 원래 배열을 수정하는 것X, 새로 배열을 생성
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

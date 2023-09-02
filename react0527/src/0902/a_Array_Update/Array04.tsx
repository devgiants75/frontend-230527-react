import React, { useState } from 'react'

//? 배열에 값 삽입하기
// slice() 사용하여 데이터 삽입
// : 첫 번째 인자로 시작인덱스
// : 두 번째 인자로 종료 인덱스를 받아서 사용

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'human1'},
  { id: 1, name: 'human2'},
  { id: 2, name: 'human3'},
];

interface Artist {
  id: number;
  name: string;
}

export default function Array04() {
  const [name, setName] = useState<string>('');
  const [artists, setArtists] = useState<Artist[]>(initialArtists);

  function handleClick() {
    const insertAt = 1; // 어떤 위치의 인덱스든 가능
    const nextArtists = [
      // 삽입 지점 이전의 항목들
      ...artists.slice(0, insertAt),
      // 새 항목
      { id: nextId++, name: name },
      // 삽입 지점 이후의 항목들
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h2>배열 중간에 데이터 삽입</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

import React from 'react';
import { people } from './data';
import { getImageUrl } from './utils';

type Person = {
  id: number;
  name: string;
  profession: string;
  imageId: string;
}

//! 항목 배열 필터링: filter()
//! 순서대로 목록 항목 유지 - key

export default function RenderingList02() {

  const chemists: Person[] = people.filter(person =>
    person.profession === 'chemist');

  const listItems = chemists.map(person => 
    // 화살표 함수는 바로 뒤 표현식 암시적으로 반환(return문 생략)
    // but, 중괄호가 들어서는 경우 명시적으로 return문을 작성해야 한다.
    <li key={person.id}>
      {/* key prop 규칙 */}
      {/* 1. 고유한 값 - JSX간의 다른 배열에서는 동일한 키 사용 가능 */}
      {/* 2. 키 값은 변경X */}
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        {person.id}
      </p>
    </li>
  
    )
  return (
    <ul>{listItems}</ul>
  )
}

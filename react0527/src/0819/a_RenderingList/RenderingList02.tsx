import React from 'react';
import { people } from './data';
import { getImageUrl } from './utils';

type Person = {
  id?: number;
  name: string;
  profession: string;
  imageId: string;
}

//! 항목 배열 필터링: filter()


export default function RenderingList02() {

  const chemists: Person[] = people.filter(person =>
    person.profession === 'chemist');

  const listItems = chemists.map(person =>
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
      </p>
    </li>
    )
  return (
    <ul>{listItems}</ul>
  )
}

/* eslint-disable no-lone-blocks */
import React from 'react'
import { getImageUrl } from '../utils';

//! TSX(JSX)를 자식으로 전달
{/* 내장 브라우저 태그 중첩
<div>
  <img src="" alt="" />
</div> 
*/}

{/* 컴포넌트 중첩
<Card>
  <Human />
</Card> 
*/}

interface Person {
  name: string;
  imageId: string;
}

interface HumanProps {
  person: Person;
  size: number;
}

const Props04 = ({ person, size }: HumanProps) => (
  <img
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}
  />
);

export default Props04
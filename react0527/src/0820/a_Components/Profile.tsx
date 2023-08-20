import React from 'react'
import { getImageUrl } from './utils';
import Panel from './Panel';


interface Person {
  imageId: string;
  name: string;
}

interface ProfileProps {
  person: Person;
}

// 외부에서 변수 지정을 하는 경우
// 이후에 할당된 값으로 지정됨.
// let currentPerson: Person;

export default function Profile({ person }: ProfileProps) {
  // 렌더링 이전에 변수를 수정 X
  // currentPerson = person;
  return (
    <>
      <Panel>
        {/* Header와 Avater에 직접적으로 변수, 객체를 할당 */}
        {/* 정보 전달은 props로 전달하는 것이 제일 안전 */}
        <Header person={person}/>
        <Avater person={person} />
      </Panel>
    </>
  )
}

const Header = ({ person }: ProfileProps) => {
  return <h1>{person.name}</h1>
}

const Avater = ({ person }: ProfileProps) => {
  return (
    <img
      className='avatar'
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
};
// props - 구조 분해(destructuring) 사용

import React from 'react'
import { getImageUrl } from '../utils';

// props (properties - 속성)
// : React 컴포넌트들 간에 전달할 수 있는 데이터
// : 부모 컴포넌트가 props를 통해 자식 컴포넌트에게 정보를 전달
// : tsx(jsx) 태그에 전달하는 데이터

interface Person {
  name: string;
  imageId: string;
}

interface HumanProps {
  person: Person;
  size?: number;
}

// 단일 인수로 props 객체를 전달받아 구조 분해 형식으로 전달
// 구조 분해 형식은 함수의 매개변수 속성을 읽는 것과 동일
// function Human(props: HumanProps) {
//   let person = props.person;
//   let size = props.size;
//   return (
//     <img
//       className="human"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }
//? 여러 객체 구조가 중첩되어 있는 경우 사용하는 것을 추천하지 X
// 객체1.객체2.객체3.객체 

function Human({ person, size=100 }: HumanProps) {
  return (
    <img
      className="human"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// 기본 값 지정 시
// props가 누락된 경우 or size={undefined}로 전달한 경우에만 해당 기본값이 사용 가능
// size={null}, size={0}을 전달할 경우에는 기본값이 사용되지 않음.

export default function Props01() {
  return (
    <div>
      <Human 
        person={{ name: "휴먼1", imageId: "1bX5QH6" }} 
      />
      <Human 
        person={{ name: "휴먼2", imageId: "OKS67lh" }} 
      />
      <Human 
        person={{ name: "휴먼3", imageId: "Yfe0qp2" }} 
        size={undefined}
      />
    </div>
  );
}

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
  size: number;
}

function Human({ person, size }: HumanProps) {
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

export default function Props01() {
  return (
    <div>
      <Human 
        person={{ name: "휴먼1", imageId: "1bX5QH6" }} 
        size={200} 
      />
      <Human 
        person={{ name: "휴먼2", imageId: "OKS67lh" }} 
        size={300} 
      />
      <Human 
        person={{ name: "휴먼3", imageId: "Yfe0qp2" }} 
        size={500} 
      />
    </div>
  );
}

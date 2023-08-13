import React from 'react'
// TSX(JSX) 스프레드 구문으로 prop 전달

import { getImageUrl } from "../utils";

interface Person {
  name: string;
  imageId: string;
}

interface HumanProps {
  person: Person;
  size: number;
  isSepia? : boolean;
  thickBorder? : boolean;
}
const Human: React.FC<HumanProps> = ({ person, size, isSepia, thickBorder }: HumanProps) => {
  return (
    <img
      className={`human ${isSepia ? "sepia" : ""} ${thickBorder ? 'thick-border': ''}`}
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// export default function Props03({ person, size, isSepia, thickBorder }: HumanProps) {
//   return (
//     <div style={{ border: thickBorder ? "2px solid black" : "none"}}>
//       <Human 
//         person={person}
//         size={size}
//         isSepia={isSepia}
//         thickBorder={thickBorder}
//       />
//     </div>
//   )
// }

// props의 모든 값을 전달하는 경우
// 중복을 줄이기 위해 spread 문법을 사용할 수 있음.

// 형태
// <Human {...props} />
// : Human의 모든 props가 각각의 이름을 나열하지 않고도 Props03에 전달

export default function Props03(props: HumanProps) {
  return (
    <div style={{ border: props.thickBorder ? "2px solid black" : "none"}}>
      <Human {...props} />
    </div>
  )
}

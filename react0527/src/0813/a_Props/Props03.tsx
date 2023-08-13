// TSX(JSX) 스프레드 구문으로 prop 전달

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

const Human = ({ person, size, isSepia, thickBorder }: HumanProps) => {
  
}
import React, { useContext } from "react";
import { LevelContext } from "./LevelContext";

// 2. 컨텍스트 사용

interface HeadingProps {
  children: React.ReactNode;
}
export default function Heading({ children }: HeadingProps) {
  // level을 prop 대신(제거)에 LevelContext에서 값을 읽어옴.
  // useContext
  // : Heading컴포넌트가 LevelContext를 읽고자 함을 React에게 전달
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}

import { createContext } from "react";

// 1. 컨텍스트 생성
// : 구성 요소에서 사용할 수 있도록 export
// : createContext는 유일한 인수로 기본값을 지님.
export const LevelContext = createContext<number>(1);
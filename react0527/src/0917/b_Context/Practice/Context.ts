import { createContext } from "react";

// createContext 함수를 호출하여 새로운 컨텍스트를 생성
// : 500이 기본값으로 적용
// : createContext의 기본값은 사용자가 해당 Context를 사용하는
// : 컴포넌트에서 따로 지정하지 않을 경우에 사용
export const ImageSizeContext = createContext(500);
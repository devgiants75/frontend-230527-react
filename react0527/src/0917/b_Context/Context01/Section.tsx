import React, { useContext } from "react";
import { LevelContext } from "./LevelContext";

// 3. 컨텍스트 제공
interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  const level = useContext(LevelContext);
  return (
    <section
      className="section"
      style={{
        padding: "10px",
        margin: "5px",
        borderRadius: "5px",
        border: "1px solid #aaa",
      }}
    >
      {/* 
        Section 안의 어떠한 컴포넌트가 LevelContext를
        요청하면 해당 레벨을 전달해주세요.
        >> 컴포넌트는 그 위의 UI 트리에서 가장 가까운
        LevelContext.Provider 값을 사용
       */}
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

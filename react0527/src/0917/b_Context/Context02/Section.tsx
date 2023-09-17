import React, { useContext } from 'react'
import { LevelContext } from './LevelContext';

// 섹션을 표시하고 자식 컴포넌트에 레벨 컨텍스트를 제공하는 컴포넌트
export default function Section({ children, isFancy = false}: { children: React.ReactNode, isFancy?: boolean}) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' + (isFancy ? 'fancy': '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

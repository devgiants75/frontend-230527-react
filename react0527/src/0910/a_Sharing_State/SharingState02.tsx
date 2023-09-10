import React, { ReactNode, useState } from 'react'

//! 컴포넌트 간의 상태 공유
// 두 컴포넌트를 묶어서 항상 함께 변경하는 방법
// : 상태 올리기
// : 두 컴포넌트에서 상태를 제거하고 그들의 가장 가까운 공통부모에 상태를 옮겨
// : props를 통해 전달

// 부모: Accordion
// 자식: Panel
// 부모 컴포넌트가 두 개의 독립적인 자식 컴포넌트를 렌더링

//? 한 번에 하나의 패널만 확정되도록 변경
// >> 두 번째 패널을 확장하면 첫 번째 패널이 축소되어야 함.

//^ 1. 자식 컴포넌트에서 상태를 제거
//    : 부모 컴포넌트가 prop으로 Panel에게 isActive를 전달

//^ 2. 공통 부모로부터 하드코딩된 데이터를 전달
//    : 두 자식 컴포넌트의 가장 가까운 공통 부모 컴포넌트를 찾기

//^ 3. 공통 부모에 상태를 추가하고 이벤트 핸들러와 함께 아래로 전달

interface PanelProps {
  title: string;
  children: ReactNode;
  isActive: boolean; // 부모 컴포넌트가 isActive를 제어
  onShow: () => void; // 부모 컴포넌트가 prop으로 이벤트 핸들러를 내려주어 Panel 컴포넌트가 상태를 변경할 수 있게 명시적으로 허용
}

function Panel({ title, children, isActive, onShow }: PanelProps) {
  // 자식 컴포넌트에서 상태 제거
  // const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <section className='panel'>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  )
}

export default function SharingState01() { // Accordion 부모 컴포넌트
  // 상태 변수에 대한 활성 Panel의 인덱스로 숫자를 사용하여 상태 전달
  // activeIndex가 0이면 첫 번째 패널이
  //               1이면 두 번째 패널이 활성화
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <h2>0910 Frontend Class 02</h2>
      <Panel title='About' isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        Sharing State Between Components
      </Panel>

      <Panel title='Transfer' isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        컴포넌트 간의 상태 공유하기
      </Panel>

    </>
  )
}

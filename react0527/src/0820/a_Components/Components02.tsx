import React from 'react'

// let guest = 0;

type CupProps = {
  guest: number;
}

// guest 변수를 함수 내에서 변경하지 않으면서
// Cup 컴포넌트에 guest 매개변수를 지정
function Cup({ guest }: CupProps) {
  // 기존의 변수를 컴포넌트에서 변경하는 것은
  // 컴포넌트의 순수성에 맞지 X
  // guest = guest + 1;
  return <h2>Tea cup for guest {guest}</h2>
}

export default function Components02() {
  return (
    <>
    {/* 
    컴포넌트의 순수성을 유지하기 위해서는
    렌더링 중에 변수를 조정하거나 의존해서는 X
     */}
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  )
}

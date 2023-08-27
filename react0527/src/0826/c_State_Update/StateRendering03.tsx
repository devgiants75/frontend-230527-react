import React, { useState } from 'react'

// 버튼을 누를 때 텍스트의 색상을 변경
// change to Stop클릭 시 빨간색
// change to walk클릭 시 초록색 

export default function StateRendering03() {
  const [walk, setWalk] = useState<boolean>(true);

  function handleClick() {
    alert(walk ? 'Stop is next' : 'Walk is next');
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  )
}

import React from 'react'

//! 불필요한 상태 제거
// 상태 변수는 컴포넌트의 재렌더링 사이에 정보를 유지하는데에만 필요!
// : 단일 이벤트 핸드러 내에서는 일반 변수를 사용

export default function Practice03() {
  // const [name, setName] = useState<string>('');

  function handleClick() {
    // setName(prompt('What is your name?') || '');
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>Greet</button>
  )
}

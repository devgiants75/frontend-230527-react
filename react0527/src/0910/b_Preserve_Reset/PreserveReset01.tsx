import React, { useState } from 'react'

//! 상태 보존 및 재설정

// UI 트리
// React는 JSX(TSX)에서 UI트리를 생성
// : ReactDOM은 해당 UI 트리와 일치하도록 브라우저 DOM요소를 업데이트

// React는 컴포넌트를 제거하는 경우 해당 컴포넌트의 상태도 같이 파괴
// 즉, 컴포넌트의 상태가 초기화 됨.

// React는 UI트리 내의 해당 위치에서 렌더링되는 한 컴포넌트의 상태를 보존
// : 만약 컴포넌트가 제거되거나 동일한 위치에 다른 컴포넌트가 렌더링 될 경우
// : React는 그 상태를 버림.
// = 동일한 위치의 동일한 컴포넌트는 상태를 보존

function Counter({ isFancy }: {isFancy?: boolean}) {
  // 점수 상태 관리
  const [score, setScore] = useState<number>(0);
  // hover의 상태를 관리
  const [hover, setHover] = useState<boolean>(false);

  // className 초기설정
  let className = 'counter';
  // 만약 hover 상태가 true라면 className에 ' hover'를 추가
  if (hover) {
    className += ' hover';
  }

  // 만약 isFancy 속성값이 true라면 className에 fancy를 추가
  if (isFancy) {
    className += ' fancy'
  }

  return (
    <div
      // 설정된 className을 적용 
      className={className}
      // 마우스 포인터가 div 위에 있을 때 hover 상태를 true로 설정
      onPointerEnter={() => setHover(true)}
      // 마우스 포인터가 div 밖으로 나갈 때 상태를 false로 설정
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

export default function PreserveReset01() {
  // showB라는 상태와 그 값을 변경하기 위한 setShowB 함수를 정의
  const [showB, setShowB] = useState<boolean>(true);

  // isFancy라는 상태와 그 값을 변경하기 위한 setIsFancy 함수를 정의
  const [isFancy, setIsFancy] = useState<boolean>(true);

  // isPaused라는 상태와 그 값을 변경하기 위한 setIsPaused 함수를 정의
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Counter 컴포넌트를 변수에 할당
  // const counter = <Counter />

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* {counter} 첫 번째 Counter 컴포넌트를 렌더링 */}
      {/* {counter} 두 번째 Counter 컴포넌트를 렌더링 */}
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          // 체크박스의 값이 변경될 때 showB 상태값을 업데이트
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        Render the second counter
      </label>

      {/* Fancy 상태를 가진 컴포넌트 */}
      <div>
        {/* {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />} */}
        {/* 
        같은 위치에 다른 컴포넌트를 렌더링 할 경우
        그 컴포넌트의 전체 하위 트리의 상태가 초기화
         */}
        {isFancy ? (
          <div>
            <Counter isFancy={false} />
          </div>
        ) : (
          <section>
            <Counter isFancy={true} />
          </section>
        )}
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={(e) => setIsFancy(e.target.checked)}
          />
          Use fancy styling
        </label>
      </div>

      {/* isPaused 상태를 가진 컴포넌트 */}
      <div>
        {isPaused ? <p>See you later!</p> : <Counter />}
        <label>
          <input
            type="checkbox"
            checked={isPaused}
            onChange={(e) => setIsPaused(e.target.checked)}
          />
          Take a break
        </label>
      </div>
    </div>
  );
}

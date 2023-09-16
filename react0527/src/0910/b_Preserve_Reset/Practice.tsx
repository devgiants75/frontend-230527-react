import React, { useState } from 'react'

// 버튼을 눌러도 입력된 텍스트가 초기화되지 않도록 수정
// 텍스트 상태를 보존
function Form() {
  const [text, setText] = useState<string>('');
  return (
    <textarea 
      value={text} 
      onChange={e => setText(e.target.value)}
    />
  )
}

export default function Practice() {
  const [showHint, setShowHint] = useState<boolean>(false);

  return(
    <div>
      {/* Form컴포넌트의 위치를 일관적으로 두 번째 자식 위치에 유지시키고 싶은 경우: showHint가 null일 때도 null을 직접적으로 작성해야 한다. */}
      {showHint && <p><i>Hint: Your favorite city?</i></p>}
      <Form />
      {showHint ? (
        <button onClick={() => setShowHint(false)}>Hide Hint</button>
      ) : (
        <button onClick={() => setShowHint(true)}>Show Hint</button>
      )}
    </div>
  );

  //? if문과 else문 안의 return식에서
  //? Form 컴포넌트의 위치가 상이하기 때문에 react는 상태 보존을 할 수가 없다.
  // if (showHint) {
  //   return (
  //     <div>
  //       <p>Hint: Your favorite city?</p>
  //       <Form />
  //       <br />
  //       <button onClick={() => setShowHint(false)}>
  //         Hide hint
  //       </button>
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     {/* 동일한 위치의 동일한 컴포넌트는 상태를 보존 */}
  //     <Form />
  //     <br />
  //     <button onClick={() => setShowHint(true)}>
  //         Show hint
  //     </button>
  //   </div>
  // )
}

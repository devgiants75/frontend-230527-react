import React, { useState } from 'react'

// 버튼을 눌러도 입력된 텍스트가 초기화되지 않도록 수정
function Form() {
  const [text, setText] = useState<string>('');
  return (
    <textarea value={text} onChange={e => setText(e.target.value)}/>
  )
}

export default function Practice() {
  const [showHint, setShowHint] = useState<boolean>(false);

  if (showHint) {
    return (
      <div>
        <p>Hint: Your favorite city?</p>
        <Form />
        <br />
        <button onClick={() => setShowHint(false)}>
          Hide hint
        </button>
      </div>
    );
  }

  return (
    <div>
      <Form />
      <br />
      <button onClick={() => setShowHint(true)}>
          Show hint
      </button>
    </div>
  )
}

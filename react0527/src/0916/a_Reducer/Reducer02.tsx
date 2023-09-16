import React from 'react'

export default function Reducer02() {
  return (
    <>
      <h1>useState VS useReducer</h1>
      <p>
        코드 크기 <br />
        1. useState: 미리 작성해하는 코드 적다. <br />
        2. useReducer: 리듀서 함수, 디스패치 액션을 미리 작성해야 한다.
      </p>
      <p>
        가독성 <br />
        1. useState: 간단한 상태 업데이트의 경우 가독성 향상
        2. useReducer: 업데이트 로직의 '어떻게'와 이벤트 핸들어의 '무슨 일이 발생했는지'를 분리해서 가독성을 향상
      </p>

      <h1>useReducer 잘 작성하기</h1>
      <p>
        1. 리듀서는 순수해야 한다. <br />
          - 동일한 입력은 항상 동일한 출력을 가져와야 한다. <br />
        2. 각 작업은 하나의 사용자 상호작용을 설명 <br />
          - 한 사용자에 대한 액션을 명확하고 자세하게 기재해야 한다.
      </p>
    </>
  )
}

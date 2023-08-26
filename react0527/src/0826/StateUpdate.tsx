import React from 'react'
import StateRendering01 from './c_State_Update/StateRendering01'
import StateRendering02 from './c_State_Update/StateRendering02'
import StateRendering03 from './c_State_Update/StateRendering03'

export default function StateUpdate() {
  return (
    <>
      <h1 style={{ color: 'red'}}>
        0826. 리액트 상태의 렌더링
      </h1>
      <StateRendering01 />
      <StateRendering02 />
      <StateRendering03 />
    </>
  )
}

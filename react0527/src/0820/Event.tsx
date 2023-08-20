import React from 'react'
import Interactivity01 from './b_Event/Interactivity01'
import Interactivity02 from './b_Event/Interactivity02'
import Interactivity03 from './b_Event/Interactivity03'
import Interactivity04 from './b_Event/Interactivity04'
import Interactivity05 from './b_Event/Interactivity05'
import Practice from './b_Event/Practice'

export default function Event() {
  return (
    <>
      <h1 style={{ color: 'red' }}>이벤트 상호작용</h1>
      <Interactivity01 />
      <Interactivity02 />
      <Interactivity03 />
      <Interactivity04 />
      <Interactivity05 />
      <Practice />
    </>
  )
}

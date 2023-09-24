import React from 'react'
import DomRef01 from './b_DOM_Ref/DomRef01'
import DomRef02 from './b_DOM_Ref/DomRef02'
import DomRef03 from './b_DOM_Ref/DomRef03'
import DomRef04 from './b_DOM_Ref/DomRef04'
import Practice from './b_DOM_Ref/Practice'

export default function DomRef() {
  return (
    <>
      <h1 style={{ backgroundColor: 'pink'}}>
        0923 DOM을 Refs로 조작하기
      </h1>
      <DomRef01 />
      <DomRef02 />
      <DomRef03 />
      <DomRef04 />
      <Practice />
    </>
  )
}

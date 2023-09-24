import React from 'react'
import StyledComponent01 from './b_StyledComponent/StyledComponent01'
import StyledComponent02 from './b_StyledComponent/StyledComponent02'

export default function StyledComponent() {
  return (
    <>
      <h1 style={{ backgroundColor: 'pink'}}>
        0924 스타일 컴포넌트
      </h1>
      <StyledComponent01 />
      <StyledComponent02 />
    </>
  )
}

import React from 'react'
import RenderingList01 from './a_RenderingList/RenderingList01'
import RenderingList02 from './a_RenderingList/RenderingList02'
import Practice from './a_RenderingList/Practice'
import RenderingList03 from './a_RenderingList/RenderingList03'

export default function RendeingList() {
  return (
    <>
      <h1 style={{color: 'red'}}>RendeingList 리스트렌더링</h1>
      <RenderingList01 />
      <RenderingList02 />
      <Practice />
      <RenderingList03 />
    </>
  )
}

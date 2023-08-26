import React from 'react'
import UseState01 from './a_State/UseState01'
import UseState02 from './a_State/UseState02'
import UseState03 from './a_State/UseState03'
import UseState04 from './a_State/UseState04'
import Practice01 from './a_State/Practice01'
import Practice02 from './a_State/Practice02'
import Practice03 from './a_State/Practice03'

export default function State() {
  return (
    <>
      <h1 style={{ color: 'red'}}>
        0826. 리액트 상태
      </h1>
      <UseState01 />
      <UseState02 />
      <UseState03 />
      <UseState04 />
      <h3>예제 실습</h3>
      <Practice01 />
      <Practice02 />
      <Practice03 />
    </>
  )
}

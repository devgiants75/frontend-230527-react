import React from 'react'
import Object01 from './b_Object_Update/Object01';
import Object02 from './b_Object_Update/Object02';
import Object03 from './b_Object_Update/Object03';
import Practice from './b_Object_Update/Practice/index';

export default function UpdatingObjects() {
  return (
    <>
      <h1 style={{ backgroundColor: 'pink' }}>
        0827. 상태에서 객체 업데이트
      </h1>
      <Object01 />
      <Object02 />
      <Object03 />
      <br />
      <Practice />
    </>
  );
}

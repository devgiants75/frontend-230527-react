import React from 'react';
import SharingState01 from './a_Sharing_State/SharingState01';
import SharingState02 from './a_Sharing_State/SharingState02';
import Practice from './a_Sharing_State/Practice';

export default function SharingState() {
  return (
    <>
      <h1 style={{ backgroundColor: 'pink'}}>0910 컴포넌트 간의 상태 공유</h1>
      <SharingState01 />
      <SharingState02 />
      <Practice />
    </>
  )
}

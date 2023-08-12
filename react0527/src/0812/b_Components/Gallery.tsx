import React from 'react';
import { Profile1, Profile2 } from './Profile';

// 일반적으로 기본 및 명명된 내보내기 사이의 혼란을 줄이기 위해서는 
// 단일한 내보내기 스타일을 고수하는 것이 일반적

// export default 수출 : import 파일명 from '경로';
// export 수출 : import { 함수명 } from '경로'; 
export default function Gallery() {
  return (
    <section>
      <h1>Hello, Introduce Myself</h1>
      <Profile1 />
      <Profile1 />
      <Profile2 />
      <Profile2 />
    </section>
  )
}

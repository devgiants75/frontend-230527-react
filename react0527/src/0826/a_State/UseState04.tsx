import React from 'react'
import UseState03 from './UseState03'

//! 상태의 개인적 특징
// : 동일한 구성 요소를 두 번 렌더링하면 각 복사본은 완전히 격리된 상태가 된다.
// : 둘 중 하나를 변경해도 다른 하나에는 영향을 미치지 않는다.

export default function UseState04() {
  return (
    <div>
      <h2 style={{ backgroundColor: 'pink' }}>상태의 개인적 특징</h2>
      <UseState03 />
      <UseState03 />
    </div>
  )
}

//! 정리
// 컴포넌트가 렌더링 사이에 정보를 '기억'해야할 때 상태 변수를 사용
// 상태 변수는 useState Hook을 호출하여 선언
// Hooks는 use로 시작하는 특별한 함수
// : 상태와 같은 React기능을 '사용'하게 해줌.
// Hooks는 import로 가져옴. 
// : 무조건 호출되어야 함. 
// : 컴포넌트의 최상위에서 정의되어야 함.
// useState Hook은 두 개의 값(현재 상태, 그것을 업데이트하는 함수)을 반환
// 둘 이상의 상태 변수를 가지는 것이 가능
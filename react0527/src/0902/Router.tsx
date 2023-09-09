import React from 'react'
import Router01 from './b_Router/Router01'
import Router02 from './b_Router/Router02'

//! React Router Dom
// : React 애플리케이션의 페이지간에 라우팅을 추가하기 위한 라이브러리
// : 페이지 간의 전환을 도와주는 라이브러리

// SPA (Single Page Application)
// : 페이지가 1개인 어플리케이션
// : React Router Dom을 사용하는 경우 페이지를 리로드하지 않고도
// : 동적으로 페이지를 변경할 수 있다.

//! React Router Dom 필요성
// : SPA 지원, 히스토리 관리, 동적 라우팅

//! React Router Dom 설치
// npm install react-router-dom

//! BrowserRouter
// : HTML5 히스토리 API를 사용하여 UI를 동기화하는 데 사용
// : 루트 컴포넌트(index.tsx)에서 감싸서 사용하여야 한다.

// <BrowserRouter> 
//   <App />
// </BrowserRouter>

// 라우터 적용을 위해 BrowserRouter라는 컴포넌트를 사용하여 구현
// : 해당 컴포넌트로 감싸진 컴포넌트는 그 컴포넌트와 그 하위의 컴포넌트에서
// : 모두 라우팅을 사용할 수 있다.

//! Routes
// : 애플리케이션의 경로를 정의하는 데 사용
// : 해당 컴포넌트 내부에는 여러 Route 컴포넌트를 포함할 수 있다.

//! Route
// : 특정 주소에 컴포넌트를 연결
// : 애플리케이션의 특정 경로와 그 경로에서 렌더링되어야 할 컴포넌트를 연결하는 역할
// 사용 방법
// : <Route path='주소규칙' element={<보여주고 싶은 컴포넌트 />}/>

export default function Router() {
  return (
    <>
      <h1 style={{ backgroundColor: 'pink'}}>0902 React Router Dom</h1>
      <Router01 />
      <Router02 />
    </>
  )
}

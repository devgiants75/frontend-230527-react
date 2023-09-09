import React from 'react'
import { Link } from 'react-router-dom';

//! react router dom의 Link 컴포넌트
// : 사용자가 애플리케이션 내에서 이동할 수 있도록 도와주는 컴포넌트
// : Link 컴포넌트는 클릭하면 지정된 경로로 이동하게 하는 컴포넌트

// to속성을 반드시 지정
// : 이동할 경로를 지정

//! Link 컴포넌트 VS a 태그
// 1. 페이지 리로드
// : a태그는 클릭 시 페이지가 리로드 O
// : Link컴포넌트는 페이지가 리로드 X
// >> 애플리케이션의 상태값이 그대로 유지

// 2. 히스토리 관리
// : Link컴포넌트는 React Router Dom의 히스토리 객체를 사용하여 브라우저의 히스토리를 관리
// : 사용자가 뒤로 가기와 앞으로 가기 버튼을 사용할 때 상태가 올바르게 유지

export default function Router01() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/updatingArrays">Home</Link>
          </li>
          <li>
            <Link to="/">Router</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

import React from 'react';
import './App.css';
import MainPage from './Pages/MainPage';

/*
src 내부 폴더 구조 (프로젝트 구성)
- apis: api 관련 로직 모듈 파일 위치, auth 인증 파일

- assets: 이미지, 폰트, 파일, 비디오 등
- components: 재사용 가능한 컴포넌트들이 위치

- constants: 공통적으로 사용되는 상수들을 정리한 파일

- hooks: 커스텀 훅이 위치하는 폴더
- interfaces: 사용하는 데이터 단위별로 타입을 지정

- pages: 비즈니스 로직이 적혀있는 페이지 분류, react router 등을 이용하여 라우팅을 적용할 페이지 컴포넌트를 위치

- utils: 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더

*/ 

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;

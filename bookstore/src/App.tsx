import React, { useEffect, useState } from 'react';

import axios from 'axios';
import useUserStore from './Stores/user.store';

import { useCookies } from 'react-cookie';
import { Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 import
import MainPage from './Pages/MainPage';

function App() {

  // 서버와 연결 상태를 저장할 상태 변수 선언
  const [connection, setConnection] = useState<string>('');

  // 사용자 상태 관리
  const { user, setUser } = useUserStore();

  /*
    쿠키(cookies)
    : 웹 사이트와 사용자의 브라우저 사이의 데이터 조각을 저장하기 위해 사용하는 기술
    : 상태 정보를 저장하여 사용자 경험을 개선
    
    설치: npm install react-cookie
  */
  // react-cookie 라이브러리를 사용하여 쿠키 값을 가져오고 설정하는 함수 선언   
  const [ cookies, setCookies ] = useCookies();

  // 서버와의 연결을 테스트하는 함수 선언
  const connectionTest = () => {
    // axios를 사용하여 서버에 GET 요청
    axios
      .get('http://localhost:4040/')
      .then((response) => {
        // 요청 성공 시 응답 데이터를 connection 상태 변수에 저장
        setConnection(response.data);
      })
      .catch((error) => {
        // 요청 실패 시 에러 메시지를 connection 상태 변수에 저장
        setConnection(error.message);
      })
  };

  // 컴포넌트가 마운트될 때 connectionTest 함수 호출
  // 컴포넌트가 처음 로드될 때 서버와의 연결 상태를 확인
  useEffect(() => {
    connectionTest();
  }, []);

  // 쿠키 또는 사용자의 상태가 변경될 때마다 실행되는 useEffect 훅
  useEffect(() => {
    // 쿠키에 토큰이 있고 사용자 정보가 없는 경우
    if (cookies.token && !user) {
      // 서버에 사용자 정보를 요청
      axios('http://localhose:4040/api/user/', { headers: { Authorization: `Bearer ${cookies.token}`} })
        .then((response) => {
          // 요청 성공 시 응답 데이터를 사용자 상태에 저장
          const responseData = response.data.data;
          setUser(responseData);
        })
        .catch((error) => {
          // 요청 실패 시 토큰 쿠키를 현재 날짜로 설정
          setCookies('token', new Date());
        })
    }
    // 쿠키에 토큰이 없고 사용자 정보가 있는 경우
    if (!cookies.token && user) {
      // 사용자 상태를 초기화
      setUser(null);
    }
  }, [cookies.token, user]); //쿠키의 토큰 값 또는 사용자 정보가 변경될 때마다 함수 실행

  return (
    <>
      {/* Header */}

      {/* Navigation */}

      {/* React-Router-Dom */}
      <Routes>
        {/* component: Main 화면 */}
        <Route path='/' element={<MainPage />} />

      </Routes>

    </>
  );
}

export default App;

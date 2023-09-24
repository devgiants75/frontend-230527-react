import React, { useEffect } from 'react'
import { CreateConnection } from './Chat'

//? 3. 필요한 경우에 정리를 추가

// 화면에 나타날 때 채팅 서버에 연결해야 하는 컴포넌트 작성
// 
export default function Effect02() {
  useEffect(() => {
    // createConnection 함수로부터 Connection 객체를 가져옴.
    const connection = CreateConnection();
    connection.connect();
    // 컴포넌트가 언마운트될 때 연결을 종료
    // Effect의 정리 함수 반환
    // 컴포넌트가 언마운트될 때(제거될 때)와 Effect가 다시 실행되기 전에 매번 정리 함수를 호출
    return () => connection.disconnect();
  }, []); // 컴포넌트가 마운트 될 때 useEffect가 실행

  return (
    <h1>Welcome to the Chat!</h1>
  )
}

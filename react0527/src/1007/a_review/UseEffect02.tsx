import React, { useEffect, useState } from 'react'

//! 이벤트 핸들링과 동적 데이터 페치

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UseEffect02() {
  // 각각 선택한 사용자의 ID와 사용자 정보를 저장하는 상태
  const [userId, setUserId] = useState<number | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // 'userId가 변경될 때 마다' effect가 실행
  useEffect(() => {
    // userId가 null일수도 있음.
    // userId가 null이면 아무것도 하지 X (return)

    // 변경될 때 실행될 코드

  });

  // 사용자 입력을 처리하는 핸들러 함수

  return (
    <>
      <hr />
      {/* 사용자 입력을 받는 입력 필드 */}
      <input type="text" />
      {/* user가 null이 아니라면 사용자 이름을 출력 */}

    </>
  )
}

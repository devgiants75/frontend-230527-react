import React, { ChangeEvent, useEffect, useState } from 'react'

//! API 호출과 데이터 렌더링
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

  const [users, setUsers] = useState<User[]>([]);

  //? 백엔드 서버가 없는 경우
  //  , 로컬에서 데이터를 가져와 시뮬레이션
  const usersData: User[] = [
    {'id': 1, 'name': 'Lee Seung Ah', 'email': 'devgiants75@naver.com'},
    {'id': 2, 'name': 'Lee Jun Gook', 'email': 'junGook@naver.com'},
    {'id': 3, 'name': 'Lee Do Kyung', 'email': 'doKyung@naver.com'},
  ];

  // 'userId가 변경될 때 마다' effect가 실행
  useEffect(() => {
    // userId가 null일수도 있음.
    // userId가 null이면 아무것도 하지 X (return)
    if (userId === null) return;

    // 변경될 때 실행될 코드
    // userId가 정의되었을 때, 해당 ID를 가진 사용자의 데이터를 가져옴.
    fetch(`/api/users/${userId}`)
      .then((response) => response.json()) // API 응답을 JSON 형태로 파싱
      .then((data) => setUser(data)); // 파싱한 데이터를 상태에 저장

    // fetch 함수를 이용해 API를 호출하고,
    // 그 결과를 받아와 상태를 업데이트
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));

    //? 백엔드 서버가 없는 경우
    const foundUser = usersData.find((user) => user.id === userId);
    setUser(foundUser ?? null);
    // > foundUser가 null 또는 undefined이면 null을 반환
    // > 그렇지 않으면 foundUser를 반환

    //? 백엔드 서버가 없는 경우
    // delay 함수를 정의: 데이터 로딩을 시뮬레이션
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    // delay 함수를 사용하여 1초의 딜레이 후 사용자 데이터를 상태로 설정
    (async () => {
      await delay(1000); // 1초 기다림
      setUsers(usersData); // 로컬 사용자 데이터를 상태로 설정
    })();

  }, [userId]);


  // 사용자 입력을 처리하는 핸들러 함수
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.target.value는 문자열이기 때문에
    // 숫자로 변환하여 상태를 업데이트
    setUserId(Number(e.target.value));
  }

  return (
    <>
      <hr />
      {/* 사용자 입력을 받는 입력 필드 */}
      <input type="number" onChange={handleIdChange} />
      {/* user가 null이 아니라면 사용자 이름을 출력 */}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        )}
      <hr />
      <ul>
        {usersData.map((user) => (
          // 받아온 사용자 데이터를 순회하면서 UI를 구성
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

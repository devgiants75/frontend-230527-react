import React, { useEffect, useState } from 'react';
import { MockType } from './interfaces/type';
import axios from 'axios';

//! useState와 useEffect로 데이터 로딩

// useState를 사용하여 요청 상태를 관리
// : 요청의 결과
// : 로딩 상태
// : 에러

// useEffect를 사용하여 컴포넌트가 렌더링되는 시점에 요청을 시작하는 작업을 구성

export default function Api02() {
  // 상태 변수 정의
  const [users, setUsers] = useState<MockType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // 데이터를 가져오는 비동기 함수를 정의
  const fetchUsers = async () => {
    try {
      // 요청이 시작할 때 에러와 사용자 데이터를 초기화
      setError(null);
      setUsers(null);
      // 로딩 상태 true로 설정
      setLoading(true);
      const response = await axios.get<MockType[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      // 데이터는 response.data 안에 존재
      setUsers(response.data);
    } catch (e: any) {
      setError(e);
    } finally {
      // 요청이 완료되면 로딩 상태를 false로 설정
      setLoading(false); 
    }
  };
  useEffect(() => {
    // useEffect에서 비동기 함수를 호출
    fetchUsers();
  }, []); 

  // 로딩 중일 때 로딩 메시지를 반환
  if (loading) return <div>로딩중...</div>;
  // 에러가 발생했을 때 에러 메시지 반환
  if (error) return <div>에러가 발생하였습니다.</div>;
  // 사용자 데이터가 없을 때: 아무것도 렌더링 하지 X
  if (!users) return null;

  // 사용자 목록을 렌더링
  return (
    <>
      <ul>
        {/* 
          배열 렌더링을 사용하여 
          사용자의 username (name) (geo의 lat)
        */}
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.username}</strong>
            ({user.name}), ({user.address.geo.lat})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  )
}

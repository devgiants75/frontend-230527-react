import React, { ChangeEvent, useState } from 'react'

//! spread 구문을 사용하여 객체 복사

// 입력 필드들 중에서
// 한 필드만 업데이트하고, 다른 모들 필드에 대해 이전 값을 유지
export default function Object02() {
  // 각 입력 필드에 대해 별도의 상태 변수를 선언X
  // 여러 양식을 한 번에 관리가 필요한 경우, 
  // 모든 데이터를 객체에 그룹화하여 유지하는 것이 편리
  const [person, setPerson] = useState({
    firstName: 'SeungAh',
    lastName: 'Lee',
    email: 'devgiants75@qwe.com'
  });

  // 객체 spread 구문인 ...을 사용하면
  // 각 프로퍼티를 따로 복사할 필요가 X
  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      // firstName: e.target.value,
      // lastName: person.lastName,
      // email: person.email
      ...person, // 이전 필드를 복사
      firstName: e.target.value
    })
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      // firstName: person.firstName,
      // lastName: e.target.value,
      // email: person.email
      ...person,
      lastName: e.target.value
    })
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      // firstName: person.firstName,
      // lastName: person.lastName,
      // email: e.target.value
      ...person,
      email: e.target.value
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          type="text"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input
          type="text"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <br />
      <label>
        Email: 
        <input
          type="email"
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}
        <br />
        {person.lastName}
        <br />
        {person.email}
      </p>
    </>
  );
}

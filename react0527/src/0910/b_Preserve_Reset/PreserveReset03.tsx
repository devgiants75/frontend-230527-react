import React, { useState } from 'react'
import ContactList from './ContactList';
import Chat from './Chat';

//! 키를 사용하여 상태를 재설정(리셋)
// Form에서의 사용

//? Chat 컴포넌트: 텍스트 입력 상태를 포함

// 연락처에 대한 타입 정의
interface Contact {
  id: number;
  name: string;
  email: string;
}

// 연락처 데이터
const contacts: Contact[] = [
  { id: 0, name: 'LSA', email: 'lsa@email.com' },
  { id: 1, name: 'LJG', email: 'ljg@email.com' },
  { id: 2, name: 'LDK', email: 'ldk@email.com' }
];

export default function PreserveReset03() {
  // 선택된 연락처의 상태를 관리
  const [to, setTo] = useState<Contact>(contacts[0]);

  return (
    <div>
      {/* 연락처 목록과 선택된 연락처, 선택 이벤트 핸들러 전달 */}
      <ContactList 
        contacts={contacts} 
        selectedContact={to}
        onSelect={setTo}  
      />

      {/* 채팅 컴포넌트에 선택된 연락처 전달 */}
      {/* 
        채팅 컴포넌트에 키를 추가할 경우 
        : 다른 수신자를 선택할 때 Chat 컴포넌트가 처음부터 다시 생성되어 그 아래의 모든 상태를 재생성하게 된다.
      */}
      <Chat key={to.id} contact={to} />
    </div>
  )
}

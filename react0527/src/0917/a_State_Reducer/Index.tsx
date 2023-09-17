import React, { useReducer } from 'react'
import { messengerReducer, initialState } from './MessengerReducer';
import ContactList from './ContactList';

// 연락처 타입 지정
type Contact = {
  id: number;
  name: string;
  email: string;
}

// 연락처 데이터를 초기화
const contacts: Contact[] = [
  { id: 0, name: 'LSA', email: 'lsa@mail.com'},
  { id: 1, name: 'LJG', email: 'ljg@mail.com'},
  { id: 2, name: 'LDK', email: 'ldk@mail.com'}
];

export default function Index() {
  // messengerReducer와 initialState를 사용하여 useReducer 훅을 초기화
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  // 현재 선택된 연락처의 메시지를 저장
  const message = state.message[state.selectedId];

  // 현재 선택된 연락처를 찾기
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      {/* 연락처 리스트 컴포넌트를 렌더링 */}
      <ContactList 
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      {/* 현재 선택된 연락처와 메시지로 채팅 컴포넌트를 렌더링 */}
      <Chat 
        key={contact.id}
        massage={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  )
}

import React from 'react'

// 연락처 타입 정의
type Contact = {
  id: number;
  name: string;
}

// ContactList의 props 타입을 정의
type ContactListProps = {
  contacts: Contact[];
  selectedId: number;
  dispatch: (action: { type: string; contactId?: number}) => void;
}

export default function ContactList({ contacts, selectedId, dispatch}: ContactListProps) {
  return (
    <section className='contact-list'>
      <ul>
        {/* 연락처 목록을 순회하여 각 연락처마다 li요소를 생성 */}
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // 버튼 클릭 시 해당 연락처를 선택
                dispatch({
                  type: 'changed_selection',
                  contactId: contact.id,
                });
              }}
            >
              {/* 현재 선택된 연락처의 이름은 볼드 처리 */}
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

import React from 'react'

// 연락처 타입 정의
interface Contact {
  id: number;
  name: string;
  email: string;
}

// props 타입정의
interface ContactListProps {
  contacts: Contact[];
  selectedContact: Contact;
  onSelect: (contact: Contact) => void;
}

export default function ContactList({ selectedContact, contacts, onSelect }: ContactListProps) {
  return (
    <section className='contact-list' style={{ float: 'left' }}>
      <ul style={{ listStyle: 'none' }}>
        {/* 연락처 목록을 순회, 각 연락처 정보를 버튼으로 표시 */}
        {contacts.map(contact => 
          <li key={contact.id}>
            <button 
              onClick={() => {
                onSelect(contact); // 연락처가 선택될 때 onSelect 콜백을 호출
              }}
              style={{ 
                width: '100px', 
                marginRight: '10px',
                padding: '10px'
              }}
            >
              {contact.name}
            </button>
          </li>  
        )}
      </ul>

    </section>
  )
}

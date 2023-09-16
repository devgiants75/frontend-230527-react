import React, { useState } from 'react'

interface Contact {
  id: number;
  name: string;
  email: string;
}

// Chat 컴포넌트의 props 타입 정의
interface ChatProps {
  contact: Contact;
}
export default function Chat({ contact } : ChatProps) {
  // 채팅 입력 상태 관리
  const [text, setText] = useState<string>('');

  return (
    <section className='chat' style={{ float: 'left' }}>
      {/* 사용자가 입력하는 채팅 내용을 표시, 관리 */}
      <textarea 
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
        style={{ height: '150px' }}
      />
      <br />
      {/* 선택된 연락처의 이메일 주소로 메시지를 전송하는 버튼 */}
      <button style={{ padding: '10px'}}>
        Send to {contact.email}
      </button>
    </section>
  )
}

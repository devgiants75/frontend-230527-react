import React from 'react';
import { Contact, DispatchType} from './type';

// 연락처 타입 정의

// Chat 컴포넌트의 props 타입 정의
type ChatProps = {
  contact: Contact;
  message: string;
  dispatch: DispatchType;
}

export default function Chat({ contact, message, dispatch}: ChatProps) {
  return (
    <section className='chat'>
      <textarea 
        value={message}
        // 텍스트 영역의 placeholder를 연락처의 이름으로 설정
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // 텍스트가 변경될 때 edited_message 액션을 dispatch한다.
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          // 메시지 전송 버튼을 클릭하면 메시지 내용을 알림으로 보여줌.
          alert(`Sending "${message}" to ${contact.email}`);
          // 메시지 전송 액션을 dispatch
          dispatch({
            type: 'sent_message',
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  )
}

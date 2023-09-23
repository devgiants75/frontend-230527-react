import React, { useRef, useState } from 'react'

//! 채팅 입력창
// 메시지를 input창에 입력하고 Send버튼을 클릭했을 때
// Sent! 알림이 나타나기 전에 3초의 지연
// 메시지알림이 지연되는 동안 Undo버튼을 생성해서
// 해당 버튼을 클릭할 경우에 Sent! 메시지 알림이 나타나지 않도록 설정

export default function Ref03() {
  // 상태 변수로 텍스트 관리
  const [text, setText] = useState<string>('');
  // 메시지 전송 상태를 확인하기 위한 상태 변수
  const [isSending, setIsSending] = useState<boolean>(false);
  // timeoutRef를 useRef를 사용하여 관리
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  function handleSend() {
    // 메시지 전송을 시작
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert('Sent!');
      // 메시지 전송을 완료하고 상태를 초기화
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    // 전송 상태를 초기화하고 타이머를 취소
    setIsSending(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  return (
    <>
      <hr />
      {/* 텍스트 입력 필드, 전송 중이면 비활성화 */}
      <input 
        type="text" 
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {/* 전송 버튼, 전송 중이면 'Sending'이라는 텍스트를 출력 */}
      <button
        disabled={isSending}
        onClick={handleSend}
      >
        {isSending ? '전송중' : '전송'}
      </button>
      {/* 전송 중일 경우에만 'Undo' 버튼을 출력 */}
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      }
    </>
  )
}

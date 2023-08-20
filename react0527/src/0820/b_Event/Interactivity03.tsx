import React from 'react'

// 이벤트 핸들러는 컴포넌트 내부에 선언
// - 컴포넌트의 props에 접근 가능

interface AlertButtonProps {
  message: string;
  children: React.ReactNode;
}

function AlertButton({ message, children }: AlertButtonProps) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}

export default function Interactivity03() {
  return (
    <>
      <h3>2. 이벤트 핸들러에서 props 읽기</h3>
      <div>
        <AlertButton message='재생 중입니다.'>
          영화 재생
        </AlertButton>
        <AlertButton message='업로드 중입니다.'>
          이미지 업로드
        </AlertButton>
      </div>
    </>
  )
}

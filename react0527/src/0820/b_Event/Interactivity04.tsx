import React from 'react'

//! 4. 이벤트 핸들러 props 명명법
// div, button 의 내장된 컴포넌트는 onClick과 같은 브라우저의 이벤트 이름만을 지원

// 하지만, 사용자 정의 컴포넌트의 경우 이벤트 핸들러 props의 이름을 원하는대로 지정 가능
// - 관례적으로 이벤트 핸들러 props의 이름은 'on'으로 시작하고 그 뒤에는 대문자로 시작된 단어를 붙임.

interface ButtonProps {
  onSmash: () => void;
  children: React.ReactNode;
}

interface PlayButtonProps {
  movieName: string
}

// 버튼의 클릭이벤트와 children prop을 전달받는 컴포넌트
function Button({ onSmash, children}: ButtonProps) {
  return (
    // 최소단위의 이벤트 핸들러 정의 시 
    // HTML 태그를 사용하여 onClick props을 사용
    <button onClick={onSmash}>
      {children}
    </button>
  )
}

// 컴포넌트가 부모로 부터 받은 props을 이벤트 핸들러로 전달
function PlayButton({ movieName }: PlayButtonProps) {
  function handlePlayClick() {
    alert(`${movieName}이 재생 중입니다.`);
  }

  return (
    <Button onSmash={handlePlayClick}>
      "{movieName}" 재생
    </Button>
  )
}

function UploadButton() {
  return (
    <Button onSmash={() => alert('Uploading...')}>
      Upload Image
    </Button>
  )
}

export default function Interactivity04() {
  return (
    <>
      <h3>3. props로 이벤트 핸들러 전달</h3>
      <div>
        <PlayButton movieName='Harry Porter' />
        <UploadButton />
      </div>
    </>
  )
}

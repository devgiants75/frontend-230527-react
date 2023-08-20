import React from 'react'

//! 상호작용
// 상태(시간이 지나면서 변하는 데이터)를 추가하고 필요에 따라 업데이트 하거나 사용자의 입력에 응답하여 변화되는 업데이트를 관리

//! 이벤트에 응답
// 이벤트 핸들러는 클릭, 호버, 폼 입력 등에 포커스하는 등의 사용자 상호작용에 반응해서 함수를 커스터마이징 할 수 있다.

// button 내장 컴포넌트(태그)는 onClick과 같은 내장 브라우저 이벤트만을 지원

// 개발자가 직접 만든 컴포넌트는 이벤트 핸들러 prop에 원하는 이벤트 핸들러 작성이 가능

interface ToolbarProps {
  onPlayMovie: () => void;
  onUploadImage: () => void;
}

interface ButtonProps {
  onClick: () => void; // 버튼 클릭 시 호출되는 함수
  children: React.ReactNode;
}

// 두 개의 버튼을 표시
function Toolbar({ onPlayMovie, onUploadImage }: ToolbarProps) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  )
}

// 재사용 가능한 버튼 컴포넌트
// 클릭 이벤트와 표시될 텍스트(자식 요소)를 props로 받아옴.
function Button({ onClick, children }: ButtonProps) {
  return (
    // 버튼 요소를 렌더링, 클릭 시 onClick 콜백 함수가 호출
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default function Interactivity01() {
  return (
    // 각 버튼 기능에 대한 콜백 함수를 prop로 전달
    <Toolbar
      onPlayMovie={() => alert("Playing")}
      onUploadImage={() => alert("Uploading")}
    />
  );
}

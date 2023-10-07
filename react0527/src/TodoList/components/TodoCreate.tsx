import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md'

// 새로운 할일을 등록 할 수 있는 컴포넌트 생성

// useState를 사용하여 토글 할 수 있는 open 값 관리
// 해당 값이 true일 때
// : 아이콘을 45도 돌려 +를 x 모양으로 보여지게 나타냄.
//    버튼 색상도 빨간색으로 변경
//    할 일을 입력 할 수 있는 폼을 보여줌.

// CircleButton 타입 정의
// open 프로퍼티 타입: boolean
interface CircleButtonProps {
  open: boolean;
}

const CircleButton = styled.button<CircleButtonProps>`
  background: #38d9a9;
  /* 마우스가 버튼 위에 있을 때 색상 지정 */
  &:hover {
    background: #9ee1cd;
  }
  /* 버튼이 클릭 될 때 색상 지정 */
  &:active {
    background: #20c997;
  }

  /* 버튼의 스택 순서를 설정(다른 요소와 겹칠 때 상위에 위치) */
  z-index: 5;

  cursor: pointer;

  width: 80px;
  height: 80px;

  display: block; // (이 선언은 아래의 'display:flex'선언으로 무시)
  align-items: center;
  justify-content: center;

  font-size: 60px;

  /* 버튼의 위치를 절대 위치로 설정(상위 요소를 기준으로 좌표 설정) */
  position: absolute;
  left: 50%; // 버튼을 상위 요소의 가로 중앙에 위치
  bottom: 0px; // 버튼을 상위 요소의 바닥에 붙여 위치

  /* 
    버튼을 자신의 크기 기준으로 왼쪽으로 50% 아래로 50% 옮김
    > 중앙 정렬, 바닥으로 부터 거리를 조절
   */
  transform: translate(-50%, 50%);

  color: white; // 버튼 내부의 텍스트 혹은 아이콘 색상을 설정

  border-radius: 50%; // 원 형태를 지정
  border: none; // 버튼의 테두리를 제거
  outline: none; // 버튼 클릭 시에 생기는 외곽선(outline) 제거

  display: flex; //

  /* 
    모든 css 변화가 0.125초 동안 일어나며
    , 변화의 시작이 부드럽게 이루어짐. 
  */
  transition: 0.125s all ease-in;

  ${props =>
    props.open && // props.open이 true일 경우 아래 CSS 적용
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }

      /* 버튼을 45도 회전 */
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default function TodoCreate() {
  // useState로 open 상태 관리 (초기값 false)
  const [open, setOpen] = useState<boolean>(false);

  // open 상태를 토글하는 함수
  const onToggle = () => setOpen(prev => !prev);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder='할 일 입력 후, Enter를 누르세요.' />
          </InsertForm>
        </InsertFormPositioner>
      )}
      {/* 
        CircleButton을 클릭하면 onToggle 함수가 실행, open 상태가 토글
      */}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>

    </>
  )
}

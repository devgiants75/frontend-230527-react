import React from 'react'
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

// Remove 컴포넌트 스타일링
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

// TodoItemBlock 컴포넌트 스타일링
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      // hover 시 Remove 컴포넌트가 표시
      display: initial; 
    }
  }
`;

// CheckCircle 컴포넌트 스타일링
// done 프로퍼티 타입: boolean
const CheckCircle = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${props => 
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

// Text 컴포넌트 스타일링
// done 프로퍼티 타입: boolean
const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => 
    props.done &&
    css`
      color: #ced4da;
    `}
`;

// props 타입 지정
interface TodoItemProps {
  id?: number;
  done: boolean;
  text: string;
}

// TodoItem 컴포넌트 지정
export default function TodoItem({ id, done, text }: TodoItemProps) {
  return (
    <TodoItemBlock>
      {/* done의 값에 따라 체크 표시를 컨트롤 */}
      <CheckCircle done={done}>
        {done && <MdDone />}
      </CheckCircle>

      {/* 할 일 텍스트를 출력, 완료상태에 따라 스타일을 변경 */}
      <Text done={done}>{text}</Text>

      {/* 삭제 아이콘 표시 */}
      <Remove>
        <MdDelete />
      </Remove>

    </TodoItemBlock>
  )
}

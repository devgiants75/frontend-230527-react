import React from 'react'
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../contexts/TodoContext';

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
  id: number;
  done: boolean;
  text: string;
}

// TodoItem 컴포넌트 지정
function TodoItem({ id, done, text }: TodoItemProps) {
  // Todo의 상태를 변경할 dispatch 함수를 가져옴.
  const dispatch = useTodoDispatch();

  // 완료 상태를 토글하는 함수
  const onToggle = () => dispatch({ type: 'TOGGLE', id });

  // 할 일 항목을 제거하는 함수
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock>
      {/* done의 값에 따라 체크 표시를 컨트롤 */}
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>

      {/* 할 일 텍스트를 출력, 완료상태에 따라 스타일을 변경 */}
      <Text done={done}>{text}</Text>

      {/* 삭제 아이콘 표시 */}
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>

    </TodoItemBlock>
  )
}

// 맨 마지막 내보내기 부분에 React.memo를 사용하여 해당 컴포넌트를 묶을 경우에
// > 다른 항목이 업데이트 될 때, 불필요한 리렌더링을 방지
// > 성능 최적화
export default React.memo(TodoItem);
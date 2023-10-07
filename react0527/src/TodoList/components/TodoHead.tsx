import React from 'react'
import styled from 'styled-components';

// TodoHeadBlock 컴포넌트 정의
const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;

  // 경계선 추가
  border-bottom: 1px solid #e9ecef;

  // 하위 컴포넌트에 스타일 적용
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    font-size: 21px;
    color: #868e96;
  }
  .tasks-left {
    margin-top: 40px;
    font-size: 18px;
    color: #20c997;
    font-weight: bold;
  }
`;

// TodoHead 컴포넌트 정의
// 단순히 UI를 렌더링
export default function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2023년 10월 07일</h1>
      <div className='day'>토요일</div>
      <div className='tasks-left'>할 일 2개 남음</div>
    </TodoHeadBlock>
  )
}

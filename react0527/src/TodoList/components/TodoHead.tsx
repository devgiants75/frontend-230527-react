import React from 'react'
import styled from 'styled-components';
import { useTodoState } from '../contexts/TodoContext';

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
  // useTodoState hook을 사용하여 todos 상태를 가져옴.
  const todos = useTodoState();
  // todos 배열에서 완료되지 않은(undone) 할 일들만 필터링하여 undoneTasks에 저장
  const undoneTasks = todos.filter((todo: {done: boolean}) => !todo.done);

  // 오늘 날짜에 대한 Date 객체 생성
  const today = new Date();
  // 날짜를 '2023년 10월 08일'형태의 문자열로 포맷팅
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric', // 숫자 표시
    month: 'long', // 월을 긴 형태의 이름으로 표시(문자열로 표시)
    day: 'numeric' // 숫자 표시
  });
  // 요일을 '수요일'형태의 문자열로 포맷팅
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long' // '수요일' 형태의 문자열로 포맷팅
  });

  return (
    <TodoHeadBlock>
      {/* Date의 toLocaleString 함수를 사용 */}
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  )
}

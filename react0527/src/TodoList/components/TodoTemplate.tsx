import React, { ReactNode } from 'react'
import styled from 'styled-components'

// TodoTemplateBlock 컴포넌트를 정의
const TodoTemplateBlock = styled.div`

  width: 512px;
  height: 768px;

  /* 추후 추가 버튼을 박스 하단에 위치시키기 위한 스타일 설정 */
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  /* 페이지 중앙에 박스 정렬 */
  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;

  /* flexbox 레이아웃 적용 */
  display: flex;
  /* flexbox의 방향을 열 방향으로 설정 */
  flex-direction: column;
`;

// TodoTemplate props 타입 정의
interface TodoTemplateProps {
  children: ReactNode;
}

export default function TodoTemplate({ children }: TodoTemplateProps) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;

  height: 2.25rem;
  font-size: 1rem;

  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #ffeeee;
  }

  // 버튼 사이의 간결 설정
  & + & { // 연속으로 배치된 같은 버튼 요소 사이의 스타일을 정의
    margin-left: 1rem;
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// children과 나머지 props를 받아
// styledButton에 전달하는 함수형 컴포넌트
export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

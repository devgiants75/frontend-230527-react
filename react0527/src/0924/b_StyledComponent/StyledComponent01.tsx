import React from 'react'
import styled, { css } from 'styled-components';

//! Styled-Component(스타일 컴포넌트)
// CSS in JS 기술
// ex. styled-Component, emotion, styled-jsx

//? 1. 스타일 컴포넌트 설치
// npm install styled-components

//? 2. 스타일 컴포넌트 생성 방법
// 대문자명으로 스타일 컴포넌트명을 지정
// styled-components에서 styled를 import 받아옴.
// styled에 원하는 태그를 붙여서 작성

type CircleProps = {
  color?: string;
  huge?: boolean;
}

const Circle = styled.div<CircleProps>`
  width: 150px;
  height: 150px;
  /* background: black; */
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
      width: 200px;
      height: 200px;
    `
  }
`;

export default function StyledComponent01() {

  return (
    <>
      <Circle />
      <Circle color='blue' />
      <Circle color='blue' huge />
    </>
  )
}

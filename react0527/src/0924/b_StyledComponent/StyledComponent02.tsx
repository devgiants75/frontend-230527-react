import React from 'react'
import styled from 'styled-components';
import Button from './Button';

const Block = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

export default function StyledComponent02() {
  return (
    <Block>
      <Button>BUTTON</Button>
      <Button>BUTTON</Button>
    </Block>
  )
}

import React, { useState } from 'react';

// MUI 시스템에서 styled 함수 호출
import { styled } from '@mui/system';
import { Card, CardContent, Typography } from '@mui/material';

// 3D 효과 - perspective 스타일을 적용
const FlipCard = styled('div')({
  perspective: '1000px'
});

// 3D 회전 효과를 적용
const FlipCardInner = styled('div', {
  shouldForwardProp: (prop) => prop !== 'flip',
})<{ flip: boolean}>(({ flip }) => ({
  transformStyle: 'preserve-3d', // 3D 변환 스타일 유지
  transition: 'transform 0.6s', // 변환에 0.6초 동안의 트랜지션 효과 적용
  transform: flip ? 'rotateY(180deg)' : 'none',
}));

const CardFace = styled('div')({
  backfaceVisibility: 'hidden',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '700px',
  height: '350px'
});

const CardFront = styled(CardFace)({
  backgroundColor: '#e9e9e9',
});

const CardBack = styled(CardFace)({
  backgroundColor: '#6f6f6f',
  transform: 'rotateY(180deg)'
});

export default function MainPage() {
  const [flip, setFlip] = useState<boolean>(false);

  return (
    <FlipCard>
      <FlipCardInner flip={flip}>
        <CardFront onClick={() => setFlip(!flip)}>
          <Card>
            <CardContent>
              <Typography variant='h5'>
                Front of the Card
              </Typography>
            </CardContent>
          </Card>
        </CardFront>

        <CardBack onClick={() => setFlip(!flip)}>
          <Card>
            <CardContent>
              <Typography variant='h5'>
                Back of the Card
              </Typography>
            </CardContent>
          </Card>
        </CardBack>

      </FlipCardInner>
    </FlipCard>
  )
}

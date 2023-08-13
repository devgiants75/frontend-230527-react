import React from 'react'
import Person from './Props04';

interface CardProps {
  children: React.ReactNode;
}

// 단순히 내부 컨텐츠를 래핑하는 컴포넌트
const Card: React.FC<CardProps> = ({ children }) => (
  <div className='card'>
    {children}
  </div>
);

export default function Profile() {
  return (
    <Card>
      <Person 
        person={{
          name: '휴먼1',
          imageId: 'Yfe0qp2'
        }}
        size={100}
      />
    </Card>
  )
}

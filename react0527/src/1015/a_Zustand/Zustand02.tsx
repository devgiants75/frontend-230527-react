import React, { useEffect } from 'react'
import { useDataStore } from './stores/data.store'
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

//! zustand를 사용하여 API 호출 상태관리
// data.store.ts에서 관리하는 데이터 상태를 가져오기.

export default function Zustand02() {

  // useDataStore 훅을 사용하여 data 상태 값 가져오기
  // 스토어의 data 프로퍼티를 선택하여 반환
  const data = useDataStore((state) => state.data);

  // useDataStore 훅을 사용하여 fetchData 함수 호출
  const fetchData = useDataStore((state) => state.fetchData);

  // useEffect로 컴포넌트 마운트 시 fetchData 함수 호출
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return (
    <div style={{ maxWidth: 500, margin: '0 auto'}}>
      {/* data가 null이거나 undefined가 아닐 때만 렌더링 */}
      {data?.map(data => (
        <Card elevation={3}>
          <CardHeader 
            title={data.name} 
            subheader={data.username} 
          />
          <CardContent>
            <Typography variant='body2' gutterBottom>
              Email: {data.email}
            </Typography>
            <Typography variant='body2' gutterBottom>
              Address: {data.id}
            </Typography>
            <Typography variant='body2' gutterBottom>
              Phone: {data.phone}
            </Typography>
            <Typography variant='body2' gutterBottom>
              Company: {data.company.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

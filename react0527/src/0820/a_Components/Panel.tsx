import React, { ReactNode, useState } from 'react'

interface PanelProps {
  children: ReactNode;
}

export default function Panel({ children }: PanelProps) {
  // open의 상태를 관리하기 위한 useState 훅
  const [open, setOpen] = useState(true);

  return (
    <section className='panel'>
      {/* 버튼 클릭 시 open 상태를 반전 */}
      <button onClick={() => setOpen(!open)}>
        {open ? '숨기기' : '열기'}
      </button>
      {/* openm 상태가 true일 경우에만 children를 렌더링 */}
      {open && children}
    </section>
  )
}

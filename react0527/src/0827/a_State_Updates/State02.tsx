import React, { useState } from 'react'

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

// 사용자가 동시에 여러 아이템의 주문을 제출할 수 있는 앱

// 사용자가 'Buy'버튼을 누를 때마다 'Pending' 카운터가 하나씩 증가
// 3초 후에 'Pending'카운터는 감소 - Completed 카운터는 증가
export default function State02() {
  const [pending, setPending] = useState<number>(0);
  const [completed, setCompleted] = useState<number>(0);

  async function handleClick() {
    // setPending(pending + 1);
    // await delay(3000);
    // setPending(pending - 1); // setPending(0 - 1);
    // setCompleted(completed + 1);

    setPending(p => p + 1); // Buy 버튼 클릭 시 pending 상태를 1 증가
    await delay(3000); // 3초 동안 대기
    setPending(p => p - 1); // 3초 후 pending 상태를 1 감소
    setCompleted(c => c + 1); // 3초 후 completed 상태를 1 증가
  }

  return (
    <>
      <br />
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  )
}

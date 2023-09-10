import React, { useState } from 'react'

//! 입력에 반응하는 상태

//? 선언적 UI와 명령형 UI 비교

// 명령형 프로그래밍: 브라우저에서 DOM만을 사용
// >> ts, html문서만으로 작성 가능

// 선언적 프로그래밍
// : 브라우저에서 React를 사용하여 UI를 직접 조작하는 것이 아니라
// : 표시하려는 내용을 선언하면 React가 UI를 업데이트하는 방식으로 파악

// React에서 UI를 선언적으로 작성하는 방법

//^ 1. 구성요소를 다양한 시각적 상태로 식별
// EX) input에 데이터 입력

// 빈 상태: 비활성화된 '제출' 버튼 존재
// 입력 중: 활성화된 '제출' 버튼 존재
// 제출 중: 완전히 비활성화 > 스피너가 표시

// 성공: 양식 대신 '성공!' 메시지 표시
// 오류: 입력 중 상태와 동일하지만 추가 오류 메시지를 표시

//^ 2. 상태 변경을 트리거하는 것을 결정
// 사람이 입력: 버튼 클릭, 필드 입력, 링크 탐색 등
// 컴퓨터의 입력: 네트워크 응답 도착, 시간 초과 완료, 이미지 로딩 등 

// Empty >> Typing >> Submitting > Error
//                               > Success

//^ 3. useState를 사용하여 메모리 내 상태를 나타내기
// 입력의 답변을 저장
// 오류가 있는 경우를 저장
// const [answer, setAnswer] = useState<string>('');
// const [error, setError] = useState<string | null>(null); // 오류가 발생하는 경우 해당 메시지 저장

// const [isEmpty, setIsEmpty] = useState<boolean>(true);
// 제출중에 대한 상태
// const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
// 오류일 경우 상태
// 성공일 경우 상태

//^ 4. 필수적이지 않은 상태 변수 제거
// 필수적이지 않은 상태가 충돌되는지 여부
// EX) isTyping과 isSubmitting이 동시에 참일 수 있는가? 
// 다른 상태 변수에서 이미 동일한 정보를 얻을 수 있는지 여부
// 다른 상태 변수의 역(반대)에서 동일한 정보를 얻을 수 있는지 여부

// const [answer, setAnswer] = useState<string>('');
// const [error, setError] = useState<string | null>(null);
// const [status, setStatus] = useState('typing'); // typing, submitting, success

//^ 5. 이벤트 핸들러를 연결하여 상태 설정

function submitForm(answer: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again'));
      } else {
        resolve();
      }
    }, 1500);
  })
}

export default function ManageState01() {

  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<'typing' | 'submitting' | 'success'>('typing'); 
  
  if (status === 'success') {
    return <h1>정답입니다!</h1>
  }

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');

    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('An unexpected error occurred.'));
      }
      setStatus('typing');
    }
  }

  function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setAnswer(event.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

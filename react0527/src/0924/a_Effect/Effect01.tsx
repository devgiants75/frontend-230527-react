import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

//! Effect를 사용하여 동기화

//? 1. Effect란?

// React 컴포넌트 내의 두 종류의 로직
// - 렌더링 코드는 컴포넌트의 최상위에서 실행
// - 이벤트 핸들러는 컴포넌트 내부의 중첩된 함수로, 
//  계산하는 대신 작업을 수행 

// Effect는 렌더링 자체에서 발생하는 부작용을 지정할 수 있도록 함.
// Effect는 화면 업데이트 후 커밋의 마지막에 실행
// - 네트워크와 같은 외부 시스템과 React를 동기화 가능하게 함.

// Effect는 주로 React 코드 밖의 외부 시스템과 동기화하기 위해 사용되기 때문에 단순히 다른 상태를 기반으로 몇몇 상태를 조정하기 위해서는 불필요하다.

//? 2. Effect 작성 방법
// 1. Effect를 선언 (Effect는 주로 모든 렌더링 후에 실행)

// 2. Effect의 종속성을 지정
//    (Effect는 필요할 때만 다시 실행되도록 작성하는 것이 좋다.)

//* 의존성 배열
// useEffect(() => {
//  모든 렌더링 후에 실행
// });

// useEffect(() => {
//  마운트 될 때만 실행 (컴포넌트가 나타날 때)
// }, []);

// useEffect(() => {
//   마운트 될 때!
//   그리고, 마지막 렌더링 후에 a나 b가 변경되었을 경우에도 실행
// }, [a, b]);

// 3. 필요한 경우 정리를 추가

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

// 내장 브라우저 video태그를 렌더링하는 사용자 정의 함수
function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  // TODO: isPlaying과 관련된 작업 수행
  // video 태그에 대한 ref 생성
  const ref = useRef<HTMLVideoElement | null>(null);

  // DOM 업데이트를 Effect로 감싸면 React가 먼저 화면을 업데이트 한다. >> 그 다음 Effect가 실행
  useEffect(() => {
    // 종속성 배열에 ref를 생략하는 이유
    // ref객체는 항상 안정적인 객체를 얻는다.
    // 즉, 스스로의 업데이트가 되지 않는 객체
    if (ref.current) {
      if (isPlaying) { //! isPlaying을 사용했기 때문에 
        console.log('video.play() 호출');
        ref.current.play(); // isPlaying이 true일 때 비디오 실행
      } else {
        console.log('video.pause() 호출');
        ref.current.pause(); // isPlaying이 false일 때 비디오 일시 정지
      }
    }
    // React에게 불필요하게 Effect를 
    // 다시 실행하는 것을 방지하기 위해서는 
    // useEffect 호출의 두 번째 인자로 의존성 배열을 지정
    //! 종속성이 지정되어야 한다.
  }, [isPlaying]); // isPlaying이 변경될 때마다 Effect가 실행
  
  return <video src={src} ref={ref} loop playsInline />
}

export default function Effect01() {
  // 비디오의 재생 상태를 관리하는 상태
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // 입력 메시지 상태를 관리하는 상태
  const [text, setText] = useState<string>('');

  // 입력값 변경 이벤트 핸들러
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  // useEffect훅을 React에서 가져온 뒤
  // 컴포넌트의 최상위에서 호출하여 Effect안에 코드 작성
  // useEffect(() => {
    // 이 코드는 '모든' 렌더링 후에 실행
    // >> 컴포넌트가 렌더링 될 때마다 React는 화면을 업데이트하고
    //    useEffect내의 코드를 실행
    //    useEffect는 렌더링이 화면에 반영될 때까지 
    //    코드 실행을 '지연'
  // });

  return (
    <>
      {/* 사용자 입력을 받기 위한 input요소 */}
      <input type="text" value={text} onChange={handleInputChange} />
      <br />
      {/* 버튼 클릭시 isPlaying 상태를 변경 */}
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      {/* VideoPlayer 컴포넌트에 상태와 비디오 링크를 전달 */}
      <VideoPlayer 
        isPlaying={isPlaying}
        src='https://cdn.pixabay.com/vimeo/563001934/77509.mp4?width=640&hash=50388be96c2b5be2514d322c7cc1f8c12f5d14ec'
      />
    </>
  )
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// App 태그가 Id값이 root인 요소로 전달(렌더링)
root.render(
  // 입구 파일
  // npm run start를 사용해서 페이지를 구동할 때 화면에서 제일 먼저 찾는 파일
  
  // React.StrictMode
  // 개발 중 각 컴포넌트의 함수를 두 번 호출
  // 컴포넌트 함수를 두 번 호출 함으로써 순수성을 깨는 함수에서 예기치 못한 결괏값을 나타내도록 함.
  <React.StrictMode>
    {/* 라우터 적용을 위한 컴포넌트 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* App태그가 화면에 렌더링되는 UI전체  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

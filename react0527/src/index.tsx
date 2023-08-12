import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// App 태그가 Id값이 root인 요소로 전달(렌더링)
root.render(
  // 입구 파일
  // npm run start를 사용해서 페이지를 구동할 때 화면에서 제일 먼저 찾는 파일
  <React.StrictMode>
    {/* App태그가 화면에 렌더링되는 UI전체  */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

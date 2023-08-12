import React from 'react';
import './App.css';
import Images from './0812/b_Components/Images';
import Gallery from './0812/b_Components/Gallery';
import TSX01 from './0812/c_TSX/Tsx01'
import TSX02 from './0812/c_TSX/Tsx02'
import TSX03 from './0812/c_TSX/Tsx03'

// App함수가 화면에 렌더링되는 UI전체
function App() {
  return (
    <>
      <Images />
      <Gallery />
      <TSX01 />
      <TSX02 />
      <TSX03 />
    </>
  );
}

export default App;

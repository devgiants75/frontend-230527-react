import React from 'react';
import './App.css';
import Components from './0812'
import Props from './0813/Props'
import Rendering from './0813/Rendering'
import RenderingLists from './0819/RenderingList'
import ComponentsPure from './0820/Components'
import Event from './0820/Event';
import State from './0826/State';
import RenderingCommit from './0826/RenderingCommit';
import StateUpdate from './0826/StateUpdate';

// App함수가 화면에 렌더링되는 UI전체
function App() {
  return (
    <>
      <Components />
      <Props />
      <Rendering />
      <RenderingLists />
      <ComponentsPure />
      <Event />
      <State />
      <RenderingCommit />
      <StateUpdate />
    </>
  );
}

export default App;

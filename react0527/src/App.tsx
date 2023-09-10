import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Components from './0812'
import Props from './0813/Props'
import Rendering from './0813/Rendering'
import RenderingLists from './0819/RenderingList'
import ComponentsPure from './0820/Components'
import Event from './0820/Event';
import State from './0826/State';
import RenderingCommit from './0826/RenderingCommit';
import StateUpdate from './0826/StateUpdate';
import StateUpdates from './0827/StateUpdates';
import UpdatingObjects from './0827/UpdatingObjects';
import UpdatingArrays from './0902/UpdatingArrays';
import Router from './0902/Router';
import ManageState from './0909/ManageState';
import StateStructure from './0909/StateStructure';
import SharingState from './0910/SharingState';

// App함수가 화면에 렌더링되는 UI전체
function App() {
  return (
    <>
      {/* Routes 내에 존재하지 않는 컴포넌트는 항상 렌더링 */}
      <Components />
      <Props />
      <Rendering />
      <RenderingLists />
      <ComponentsPure />
      <Event />
      <State />
      <RenderingCommit />
      <StateUpdate />
      <StateUpdates />
      {/* 라우터 사용으로 페이지 연결 */}
      {/* <Route path='주소규칙' element={<보여주고 싶은 컴포넌트 />}/> */}
      <Routes>
        <Route path='/updatingObjects' element={<UpdatingObjects />} />
        <Route path='/updatingArrays' element={<UpdatingArrays />} />
        <Route path='/router' element={<Router />}/>
        <Route path='/manageState' element={<ManageState />} />
        <Route path='/stateStructure' element={<StateStructure />} />
        <Route path='/sharingState' element={<SharingState />}/>
      </Routes>
    </>
  );
}

export default App;

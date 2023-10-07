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
import Abcde from './Abcde';
import PreserveReset from './0910/PreserveReset';
import Reducer from './0916/Reducer';
import StateReducer from './0917/StateReducer';
import Context from './0917/Context';
import Ref from './0923/Ref';
import DomRef from './0923/DomRef';
import Effect from './0924/Effect';
import StyledComponent from './0924/StyledComponent';
import Review from './1007/Review';

import Index from './TodoList/Index';
import CustomHook from './1007/CustomHook';
import CustomCounter from './1007/b_customHook/CustomCounter';

// App함수가 화면에 렌더링되는 UI전체
function App() {
  return (
    <>
      {/* Routes 내에 존재하지 않는 컴포넌트는 항상 렌더링 */}
      <Abcde />
      
      {/* 라우터 사용으로 페이지 연결 */}
      {/* <Route path='주소규칙' element={<보여주고 싶은 컴포넌트 />}/> */}
      <Routes>
        <Route path='/components' element={<Components />} />
        <Route path='/props' element={<Props />} />
        <Route path='/rendering' element={<Rendering />} />
        <Route path='/renderingLists' element={<RenderingLists />} />
        <Route path='/componentsPure' element={<ComponentsPure />} />
        <Route path='/event' element={<Event />} />
        <Route path='/state' element={<State />} />
        <Route path='/renderingCommit' element={<RenderingCommit />} />
        <Route path='/stateUpdate' element={<StateUpdate />} />
        <Route path='/stateUpdates' element={<StateUpdates />} />
        <Route path='/updatingObjects' element={<UpdatingObjects />} />
        <Route path='/updatingArrays' element={<UpdatingArrays />} />
        <Route path='/router' element={<Router />}/>
        <Route path='/manageState' element={<ManageState />} />

        <Route path='/stateStructure' element={<StateStructure />} />
        <Route path='/sharingState' element={<SharingState />}/>
        <Route path='/preserveReset' element={<PreserveReset />}/>
        <Route path='/reducer' element={<Reducer />}/>
        <Route path='/stateReducer' element={<StateReducer />}/>
        <Route path='/context' element={<Context />}/>
        <Route path='/ref' element={<Ref />}/>
        <Route path='/domRef' element={<DomRef />}/>
        <Route path='/effect' element={<Effect />}/>
        <Route path='/styledComponent' element={<StyledComponent />}/>
        <Route path='/review' element={<Review />}/>
        <Route path='/customHook' element={<CustomHook />}/>
        
        
        <Route path='/todoList' element={<Index />}/>
      </Routes>
    </>
  );
}

export default App;

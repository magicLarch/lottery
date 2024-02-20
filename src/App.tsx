import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages';
import Setting from './pages/Setting';
import Lottery from './pages/Lottery';
import PacketWall from './pages/PacketWall';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={'/home'} element={<Index/>}/>
            <Route path={'/setting'} element={<Setting/>}/>
            <Route path={'/wall'} element={<PacketWall/>}/>
            <Route path={'/lottery'} element={<Lottery/>}/>
            <Route path="/*" element={<Index/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

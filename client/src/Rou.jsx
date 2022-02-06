import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Authorization from './components/Authorization';
import Registration from './components/Registration'
import Main from './components/Main';

function Rou() {
  return <div>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Authorization/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
  </div>;
}

export default Rou;

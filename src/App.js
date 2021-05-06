import React, { useState } from 'react';
import Map from './components/Map';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/Sidebar';
import './App.css';


function App(){
    return (
        <>
            <Sidebar />
            <Map/>
        </>
    )
}

export default App;


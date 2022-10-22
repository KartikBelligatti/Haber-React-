import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return(
    <div>  
      
   <Navbar/>
   <Routes>
    <Route path="home" element={<Home/>}></Route>
    <Route path="classcom" element={<Home/>}></Route>
   </Routes>
  </div>
  );
}

export default App;
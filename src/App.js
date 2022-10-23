import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Form from './Components/form';
import Owl from './Components/owl';
import Axi from './Components/Axios';
import Api from './Components/ApiAxios';

function App() {
  return(
    <div>  
      
   <Navbar/>

   <Routes>
    <Route path="home" element={<Home/>}></Route>
    <Route path="api" element={<Api/>}></Route>
    <Route path="axios" element={<Axi/>}></Route>
   </Routes>
  </div>
  );
}

export default App;
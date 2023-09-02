import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pag2 from '../src/components/pag2/pag2'


import { BrowserRouter, Routes, Route } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<App />} />  
        <Route path = '/pag2' element ={<Pag2 />} />   
      </Routes>

    </BrowserRouter>
   
  </React.StrictMode>,

);


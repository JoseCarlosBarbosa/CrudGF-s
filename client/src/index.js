import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pag2 from '../src/components/pag2/pag2'
import PagInicial from './components/paginicial/pagInicial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contas from './components/pagContas/contas';
import ContasListar from './components/pagContas/contasListar';

// Suponha que você obtenha 'listaVendas' de algum lugar em 'App'
const listaVendas = [];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagInicial/>} />
        <Route path="/pagLista" element={<Pag2 listaVendas={listaVendas} />} />
        <Route path="/App" element={<App/>} />
        <Route path="/Contas" element={<Contas/>} />
        <Route path="/contasListar" element={<ContasListar/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
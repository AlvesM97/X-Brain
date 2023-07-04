import React from 'react';
import DefaultPage from './components/DefaultPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Finalization from './pages/Finalization';
import Products from './pages/Products';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Products />} />
          <Route path='Finalizacao' element={<Finalization />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
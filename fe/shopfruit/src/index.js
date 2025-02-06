import React from 'react';
import ReactDOM from 'react-dom/client';
// import Homepages from './pages/users/homepages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterCustom from './router';
import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>

    <RouterCustom />

  </BrowserRouter>
);


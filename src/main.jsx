import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './router/Index';
import UrqlContext from './context/urqlContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UrqlContext>
        <Routers />
      </UrqlContext>
    </BrowserRouter>
  </React.StrictMode>,
);

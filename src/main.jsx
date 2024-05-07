import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'urql';
import Routers from './routes';

import './styles/index.css';
import client from './urql/config';
import ToastContainer from './components/common/toastContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider value={client}>
      <ToastContainer />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

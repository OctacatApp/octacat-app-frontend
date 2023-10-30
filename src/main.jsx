import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Client, Provider, cacheExchange, fetchExchange,
} from 'urql';

import { BrowserRouter } from 'react-router-dom';
import Routers from './router/Index';

import 'aos/dist/aos.css';
import './assets/styles/index.css';

// Providing the client
const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

const client = new Client({
  url: 'https://octacat-app-backend.fly.dev/query',
  exchanges: [
    cacheExchange,
    fetchExchange,
  ],
  fetchOptions: () => {
    const token = getToken();
    const tokenWithoutQuotes = token.replace(/"/g, '');

    return {
      headers: { authorization: `Bearer ${tokenWithoutQuotes}` },
    };
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider value={client}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

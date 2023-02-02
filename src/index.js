import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import { CountCartItemsProvider } from './context/cart-items-count';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CountCartItemsProvider>
        <App />
      </CountCartItemsProvider>
    </Router>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <>

      <BrowserRouter>
        <App />

        {/* this is browser router */}

      </BrowserRouter>

  </>

  , document.getElementById('root'));


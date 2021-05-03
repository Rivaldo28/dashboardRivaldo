import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import 'animate.css/animate.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


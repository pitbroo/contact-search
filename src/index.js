import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './app/Header.js';
import Footer from './app/Footer.js';
import Main from './app/Main.js';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


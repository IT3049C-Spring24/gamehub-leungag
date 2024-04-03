// Pages would render here

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage.jsx'
import TicTacToe from './routes/TicTacToe.jsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path="/rps-react" element={<HomePage/>}/>
        <Route path='/rps-react/App' element={<App/>}/>
        <Route path='/rps-react/TicTacToe' element={<TicTacToe/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// Pages would render here

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage.jsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path="/rps-react" element={<HomePage/>}/>
        <Route path='/App' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


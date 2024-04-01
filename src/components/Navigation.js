// components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./RPS.js">rps</Link>
        </li>
        <li>
          <Link to="/TicTacToe">TicTacToe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

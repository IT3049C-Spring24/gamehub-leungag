// components/Navigation.js
// Serves as a Navigation bar
import React from 'react';
import { Link } from 'react-router-dom';



const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/rps-react">Home</Link>
        </li>
        <li>
          <Link to="/App">RPS</Link>
        </li>
        <li>
          <Link to="/TicTacToe">TicTacToe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

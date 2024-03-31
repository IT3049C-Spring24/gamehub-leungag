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
        {/* Add more navigation links here if needed */}
      </ul>
    </nav>
  );
};

export default Navigation;

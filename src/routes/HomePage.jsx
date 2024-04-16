// routes/HomePage.js
// Main home page
import React from 'react';
import Navigation from '../components/Navigation';

const HomePage = () => {
  return (
    <div className="home-page">
      
      <Navigation />
      <h1>Welcome to My Website</h1>
      <p>This is a simple homepage component created with React. Feel free to explore!</p>
    </div>
  );
};

export default HomePage;

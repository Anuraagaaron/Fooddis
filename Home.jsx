// Home.jsx

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <header>
        <h1>Donor Website</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <h2>Welcome to our Donor Platform</h2>
          <p>Make a difference by contributing to our causes.</p>
        </section>
        {/* Add more sections/content as needed */}
      </main>

      <footer>
        <p>&copy; 2024 Donor Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

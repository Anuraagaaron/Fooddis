import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './donor.css';

const Donor = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your backend server for authentication
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      // Assuming the server returns a token upon successful login
      const token = response.data.token;

      // Fetch user data using the token (adjust the API endpoint accordingly)
      const userDataResponse = await axios.get('http://localhost:3000/user-data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = userDataResponse.data;

      // Do something with the user data, e.g., store it in state or context
      console.log('User Data:', userData);

      // Navigate to the Home component
      navigate('/home');
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Donor;

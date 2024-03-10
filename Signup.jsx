// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 


function SignUp() {
  const navigate = useNavigate();
  const organizations = ["Restaurants", "Events", "Orphanages", "Home"];
  const [formData, setFormData] = useState({
    name: '',
    organization: organizations[0],
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic password match validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
      
    }
   
    try {
      // Make a request to your backend server
      const response = await axios.post('http://localhost:3000/signup', formData);

      // Handle the response as needed (e.g., show a success message)
      console.log("Server response:", response.data);

      // Redirect or perform any other actions after successful signup
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Signup failed', error);
    }
    
    // Add your logic for handling the form data (e.g., sending it to a server)
    console.log("Form data submitted:", formData);
    navigate('/donor');
    // Reset the form data after submission
    setFormData({
      name: '',
      organization: organizations[0],
      username: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };
 

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-heading">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignUp}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="organization">Organization:</label>
          <select
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            required
          >
            {organizations.map((org, index) => (
              <option key={index} value={org}>
                {org}
              </option>
            ))}
          </select>

          <label htmlFor="username">Enter your username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Enter your password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="confirmPassword">Re-type your password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

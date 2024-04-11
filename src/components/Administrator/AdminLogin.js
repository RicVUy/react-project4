import React, { useState } from 'react';
import { admin } from '../data';



function AdminLogin({ isLoggedIn, setLoggedIn }) {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();



    //  admin authentication 
    const { name, password } = formData;
    
     for (let i=0; i<admin.length; i++){
    if (name === admin[i].name && password === admin[i].password) {
      // If authentication is successful, fetch employee data
      setLoggedIn(true);
          
    } 
};
  }

      
  return (
    <div>
      <h2>Administrator Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      
    </div>
  );
}

export default AdminLogin;


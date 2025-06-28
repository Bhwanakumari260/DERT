// import React from "react";
// import "./Login.css";

// function Login() {
//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form>
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">Login</button>
//         </form>

//         <div className="links">
        
//           <p>
//             Don't have an account? <a href="#"><strong>Sign up</strong></a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login;


// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', form);
      
      // Save token to localStorage
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      // You can navigate to dashboard here (if using react-router-dom)
      // navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

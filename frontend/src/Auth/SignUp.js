// import React, { useState } from "react";
// import "./SignUp.css";
// import axios from 'axios';
// const SignUp = () => {

//   const [form ,setform ] = useState({
//     name:"",
//     email:"",
//     password:"",
//     role:"admin" // default role
//   });


//    const handleChange = (e) => {
//     setform(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8080/api/auth/register', form);
//       alert("register successfully");
//     } catch (err) {
//       alert(err.response?.data?.message || 'Signup failed');
//     }
//   };
  
//   return (
//     <div className="container">
//       <form className="form" onSubmit={handleSubmit}>
//         <h2>Registration</h2>

       
//           <div className="form-group">
//             <label htmlFor="name">name</label>
//             <input 
//             type="text" placeholder="Enter your username"  
//                value={form.name}
//             />
//           </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" placeholder="Enter your password" />
//           </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//                <label>Role:</label><br />
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="admin"
//             checked={form.role === 'admin'}
//             onChange={handleChange}
//           /> Admin
//         </label>

//          <label>Role:</label><br />
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="admin"
//             checked={form.role === 'admin'}
//             onChange={handleChange}
//           /> Admin
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="technician"
//             checked={form.role === 'technician'}
//             onChange={handleChange}
//           /> Technician
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="officer"
//             checked={form.role === 'officer'}
//             onChange={handleChange}
//           /> Officer
//         </label>
//         <br /><br />
//             </div>
//           </div>
          

      
//         <button className="btn-reg" type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;


// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin'  // default role
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/register', form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        /><br /><br />

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

        <label>Role:</label><br />
        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={form.role === 'admin'}
            onChange={handleChange}
          /> Admin
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="role"
            value="technician"
            checked={form.role === 'technician'}
            onChange={handleChange}
          /> Technician
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="role"
            value="officer"
            checked={form.role === 'officer'}
            onChange={handleChange}
          /> Officer
        </label>
        <br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;

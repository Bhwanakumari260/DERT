

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { Routes ,Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Navbar from './Pages/Navbar/Navbar';


function App() {
  return (    <>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/register" element={<SignUp />} />
     <Route path="/login" element={<Login />} />

  </Routes>
  </>
  );
}

export default App;

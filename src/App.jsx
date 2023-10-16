import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import "./styles/main.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path='/' element={<Home />} />
        {/* Login Page Route */}
        <Route path='/sign-in' element={<Login />} />
        {/* Dashborad route with a parameter corresponding to the curretn user id */}
        <Route path='/user' element={<Profile />} />
      </Routes>
    </Router>
</React.StrictMode>,
)
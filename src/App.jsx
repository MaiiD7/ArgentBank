import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import "./styles/main.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import store from './redux/store';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Redux Provider
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          {/* Home Page Route */}
          <Route path='/' element={<Home />} />
          {/* Login Page Route */}
          <Route path='/sign-in' element={<Login />} />
          {/* Dashborad route with a parameter corresponding to the current profile id */}
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
)
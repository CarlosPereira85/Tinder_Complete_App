import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import OnBoarding from './pages/OnBoarding';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCookies } from "react-cookie"





const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

const authToken= cookies.AuthToken



  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        {authToken && <Route path="/dashboard" element={<Dashboard />} />}
        {authToken &&  <Route path="/onboarding" element={<OnBoarding />} />}
        
      </Routes>

    </Router>
  );
};

export default App;

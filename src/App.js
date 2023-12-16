import React, { useState } from 'react';

import Login from './pages/Login';
import Signup from './pages/Signup';

import SideBar from './components/Sidebar';
import {Routes ,Route} from 'react-router-dom';




const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const switchToLogin = () => {
    setShowLogin(true);
  };

  const switchToSignup = () => {
    setShowLogin(false);
  };

  return (
    <>
    <Routes>
        <Route path="/sidebar" element={<SideBar />} />
     
      </Routes>
      {showLogin ? (
        <Login switchToSignup={switchToSignup} />
      ) : (
        <Signup switchToLogin={switchToLogin} />
      )}
      
     
      
    </>
  );
};

export default App;

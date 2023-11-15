// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <Sidebar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </div>
  );
};

export default App;

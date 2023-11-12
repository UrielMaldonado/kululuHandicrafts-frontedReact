// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Login from './auth/Login';
import SignUp from './auth/Register.tsx';
import Home from './pages/Home.tsx';
import Ropa from './pages/Ropa.tsx';
import Accesorios from './pages/Accesorios.tsx';
import Joyeria from './pages/Joyeria.tsx';
function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderContent = () => {
    switch (currentPage) {
      case 'Login':
        return <Login />;
      case 'SignUp':
        return <SignUp />;
      case 'Ropa':
        return <Ropa />;
      case 'Joyeria':
        return <Joyeria />;
      case 'Accesorios':
        return <Accesorios />;
      default:
        return <Home/>;
    }
  };

  return (
    <>
      <Navbar onPageChange={(page) => setCurrentPage(page)} />
      {/* Content of your app goes here */}
      {renderContent()}
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavbarMobile from './Components/NavbarMobile/NavbarMobile';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  if (isLoading) {
    return <Landing />;
  }
  return (
    <main className='main-app'>
      <NavbarMobile />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
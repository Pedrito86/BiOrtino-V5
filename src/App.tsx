import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import LaNostraStoria from './pages/LaNostraStoria';
import Shop from './pages/Shop';
import Contatti from './pages/Contatti';
import Privacy from './pages/Privacy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e] text-white">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storia" element={<LaNostraStoria />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <CookieConsent />
    </div>
  );
}

export default App;

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ReservationPage = lazy(() => import('./pages/ReservationPage'));
const CateringPage = lazy(() => import('./pages/CateringPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const SpecialsPage = lazy(() => import('./pages/SpecialsPage'));

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <div className="app-container">
      <Navigation />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/specials" element={<SpecialsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
export default App;

import { SITELINKS } from '@/data/siteLinks.data';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Menu, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPage = location.pathname;
  const isHome = currentPage === '/';
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Go to homepage">
            LOGO
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {SITELINKS.slice(0, 5).map(link => (
                <li key={link.label}>
                  <NavLink
                    to={link.page}
                    className={({ isActive }) =>
                      `text-sm font-semibold hover:text-amber-500 transition-colors ${
                        isActive
                          ? 'text-amber-500'
                          : isTransparent
                            ? 'text-white/90'
                            : 'text-slate-600'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/reservations"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book a Table
            </Link>
          </div>

          <button
            type="button"
            className={`md:hidden p-2 rounded-lg ${
              isTransparent ? 'text-white' : 'text-slate-900'
            }`}
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-between items-center mb-10">
              <Link to="/" className="flex items-center gap-2.5" aria-label="Go to homepage">
                <span>LOGO</span>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-black text-slate-900 leading-none">
                    KISSEL FOODS
                  </span>
                  <span className="text-[9px] italic font-medium text-slate-400 tracking-wide leading-none mt-0.5">
                    ...Your Ideal Taste!
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg text-slate-900"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-3">
                {SITELINKS.map(link => {
                  const Icon = link.Icon;

                  return (
                    <li key={link.label}>
                      <NavLink
                        to={link.page}
                        className={({ isActive }) =>
                          `group flex items-center justify-between rounded-2xl px-4 py-4 transition-all ${
                            isActive
                              ? 'bg-amber-50 text-amber-600'
                              : 'text-slate-900 hover:bg-slate-50'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className="flex items-center gap-3">
                              <span
                                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                  isActive
                                    ? 'bg-amber-100 text-amber-600'
                                    : 'bg-slate-100 text-slate-600'
                                }`}
                              >
                                <Icon className="w-5 h-5" />
                              </span>

                              <span className="text-xl font-semibold">{link.label}</span>
                            </div>

                            <ChevronRight
                              className={`w-5 h-5 transition-transform ${
                                isActive
                                  ? 'text-amber-500'
                                  : 'text-slate-400 group-hover:translate-x-1'
                              }`}
                            />
                          </>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto pt-10 border-t border-slate-100">
              <p className="text-slate-500 text-sm mb-4">Make a reservation via</p>

              <div className="flex gap-3">
                <a
                  href="tel:+15551234567"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call</span>
                </a>

                <a
                  href="https://wa.me/15551234567"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(4px)',
        padding: scrolled ? '0.5rem 0' : '1rem 0',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-serif" style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}>
          S. Ratts Fine Art
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mobile-menu md:hidden"
          style={{
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="container flex flex-col" style={{ padding: '1rem 0' }}>
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/gallery">Gallery</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`nav-link ${isActive ? 'active' : ''}`}
      style={{
        position: 'relative',
        fontWeight: 500,
        transition: 'color 0.3s ease',
        color: isActive ? '#000' : '#666',
        marginLeft: '2rem'
      }}
    >
      {children}
      {isActive && (
        <motion.div 
          layoutId="navbar-underline"
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#000'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
      style={{
        display: 'block',
        padding: '0.5rem 1rem',
        fontSize: '1.125rem',
        fontWeight: 500,
        borderLeft: isActive ? '4px solid #000' : '4px solid transparent',
        backgroundColor: isActive ? '#f5f5f5' : 'transparent',
        color: isActive ? '#000' : '#666',
        marginBottom: '0.5rem'
      }}
    >
      {children}
    </Link>
  );
};

export default Navbar;

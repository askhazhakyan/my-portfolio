import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 699);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActiveRoute = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 699);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/my-portfolio/">alex.dev</Link>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={isOpen} onChange={toggleMenu} />

      <label htmlFor="menu-toggle" className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/my-portfolio/" id='Links' className={isActiveRoute('/my-portfolio/') ? 'active' : ''}>Home</Link> {/* Use Link here */}
          {isMobile && isActiveRoute('/my-portfolio/') && (
            <div className="semicircle visible">
              <div className="position-circle"></div>
            </div>
          )}
        </li>
        <li>
          <Link to="/about/" id='Links' className={isActiveRoute('/about/') ? 'active' : ''}>About</Link> {/* Use Link here */}
          {isMobile && isActiveRoute('/about/') && (
            <div className="semicircle visible">
              <div className="position-circle"></div>
            </div>
          )}
        </li>
        <li>
          <Link to="/projects/" id='Links' className={isActiveRoute('/projects/') ? 'active' : ''}>Projects</Link>
          {isMobile && isActiveRoute('/projects/') && (
            <div className="semicircle visible">
              <div className="position-circle"></div>
            </div>
          )}
        </li>
        <li>
          <Link to="/contact/" id='Links' className={isActiveRoute('/contact/') ? 'active' : ''}>Contact</Link>
          {isMobile && isActiveRoute('/contact/') && (
            <div className="semicircle visible">
              <div className="position-circle"></div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
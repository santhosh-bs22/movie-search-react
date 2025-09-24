import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">🎬</div>
            <div>
              <h1 className="logo-text">MovieHub</h1>
              <span className="logo-subtitle">Tamil Cinema</span>
            </div>
          </div>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
              </li>
              <li className="nav-item">
                <a href="#movies" className="nav-link" onClick={closeMenu}>Movies</a>
              </li>
              <li className="nav-item">
                <a href="#trending" className="nav-link" onClick={closeMenu}>Trending</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay for mobile */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Header;
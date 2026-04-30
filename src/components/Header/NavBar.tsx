import { NavLink } from 'react-router-dom';
import routePath from '../../routes/routesPath';
import './NavBar.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((v) => !v);

  const handleNavClick = () => {
    if (window.innerWidth < 900) {
      setIsOpen(false);
    }
  };

  return (
    <div className="nav-bar">
      {/* 🔥 BURGER */}
      <button
        className={`burger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 🔥 MENU */}
      <nav className={`menu ${isOpen ? 'active' : ''}`}>
        <div className="container menu-container">
          <NavLink
            to={routePath.home}
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {t('nav.home')}
          </NavLink>

          <NavLink
            to={routePath.about}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {t('nav.about')}
          </NavLink>

          <NavLink
            to={routePath.services}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {t('nav.services')}
          </NavLink>

          <NavLink
            to={routePath.price}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {t('nav.price')}
          </NavLink>

          <NavLink
            to={routePath.contact}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {t('nav.contacts')}
          </NavLink>

          <NavLink
            to={routePath.contact}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {t('nav.reviews')}
          </NavLink>

          <NavLink
            to={routePath.contact}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {t('nav.promo')}
          </NavLink>

          <NavLink
            to={routePath.contact}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {t('nav.blog')}
          </NavLink>
        </div>
      </nav>

      {/* overlay */}
      {isOpen && <div className="overlay" onClick={handleNavClick}></div>}
    </div>
  );
};

export default NavBar;

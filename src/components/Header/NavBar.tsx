import { NavLink } from 'react-router-dom';
import routePath from '../../routes/routesPath';
import './NavBar.css';
import Logo from '@/components/UI_components/Logo/Logo';
import { useEffect, useState } from 'react';
// import LanguageSwitcher from '../UI_component/LanguageSwitcher/LanguageSwitcher';
// import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { t } = useTranslation();
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen((v) => !v);
  };

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      closeMenu();
    }
  };

  return (
    <div className="nav-bar">
      <div className="container nav-container">
        <Logo />

        <button
          className={`burger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={'Meню'}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`menu ${isOpen ? 'active' : ''}`}>
          <div className="only-mobile" style={{ marginTop: '16px' }}>
            {/* <LanguageSwitcher compact /> */}
          </div>
          <NavLink
            to={routePath.home}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {/* {t('header.nav.home')} */}
            Główna
          </NavLink>
          <NavLink
            to={routePath.about}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            {/* {t('header.nav.about')} */}O nas
          </NavLink>
          <NavLink
            to={routePath.services}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            Uslugi
            {/* {t('header.nav.price')} */}
          </NavLink>
          <NavLink
            to={routePath.price}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            Cennik
            {/* {t('header.nav.price')} */}
          </NavLink>
          <NavLink
            to={routePath.contact}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            Kontakt
            {/* {t('header.nav.contact')} */}
          </NavLink>
        </nav>
        {/* <LanguageSwitcher className="only-desktop" /> */}
      </div>

      {isOpen && <div className="overlay" onClick={handleNavClick}></div>}
    </div>
  );
};

export default NavBar;

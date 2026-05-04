import { NavLink } from 'react-router-dom';
import routePath from '../../routes/routesPath';
import './NavBar.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../UI_components/LanguageSwitcher/LanguageSwitcher';
import MessengerLinks from '../UI_components/MessengerLinks/MessengerLinks';
import ContactModalButton from '../UI_components/ContactModal/ContactModalButton';

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
    if (window.innerWidth < 1000) {
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
          {/* 🔥 MOBILE ONLY */}
          <div className="menu-mobile">
            {/* HEADER */}
            <div className="menu-header">
              <LanguageSwitcher />
              <button className="menu-close" onClick={toggleMenu}>
                ✕
              </button>
            </div>

            <div className="menu-divider" />

            {/* NAV */}
            <div className="menu-nav">
              <NavLink to={routePath.home} end onClick={handleNavClick}>
                {t('nav.home')}
              </NavLink>
              <NavLink to={routePath.about} onClick={handleNavClick}>
                {t('nav.about')}
              </NavLink>
              <NavLink to={routePath.services} onClick={handleNavClick}>
                {t('nav.services')}
              </NavLink>
              <NavLink to={routePath.price} onClick={handleNavClick}>
                {t('nav.price')}
              </NavLink>
              <NavLink to={routePath.contact} onClick={handleNavClick}>
                {t('nav.contacts')}
              </NavLink>
            </div>

            <div className="menu-divider" />

            {/* CONTACT */}
            <div className="menu-contact">
              <p className="menu-title">Contact</p>

              <div className="menu-messengers">
                <MessengerLinks variant="menu" />
              </div>

              <ContactModalButton variant="icon" />
            </div>

            <div className="menu-divider" />

            {/* SOCIAL */}
            <div className="menu-social">
              <p className="menu-title">Follow us</p>
              {/* тут додаси соцмережі */}
            </div>
          </div>

          {/* 🔥 DESKTOP ONLY */}
          <div className="menu-desktop">
            <NavLink to={routePath.home} end>
              {t('nav.home')}
            </NavLink>
            <NavLink to={routePath.about}>{t('nav.about')}</NavLink>
            <NavLink to={routePath.services}>{t('nav.services')}</NavLink>
            <NavLink to={routePath.price}>{t('nav.price')}</NavLink>
            <NavLink to={routePath.contact}>{t('nav.contacts')}</NavLink>
          </div>
        </div>
      </nav>

      {/* overlay */}
      {isOpen && <div className="overlay" onClick={handleNavClick}></div>}
    </div>
  );
};

export default NavBar;

import ContactModalButton from '../UI_components/ContactModal/ContactModalButton';
import LanguageSwitcher from '../UI_components/LanguageSwitcher/LanguageSwitcher';
import Logo from '../UI_components/Logo/Logo';
import MessengerLinks from '../UI_components/MessengerLinks/MessengerLinks';

import './Header.css';
import NavBar from './NavBar';

const TopBar = () => {
  return (
    <div className="top-bar">
      <Logo />

      <div className="contacts desktop-only">
        <MessengerLinks />
        <ContactModalButton variant="icon" />
        <LanguageSwitcher />
      </div>
      <div className="right-block">
        <div className="contacts mobile-only">
          <MessengerLinks variant="mobile" />
          <LanguageSwitcher />
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default TopBar;

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
      <NavBar />
      <div className="contacts">
        <MessengerLinks />
        <ContactModalButton variant="icon" />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default TopBar;

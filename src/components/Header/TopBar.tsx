import ContactModalButton from '../UI_components/ContactModal/ContactModalButton';
import LanguageSwitcher from '../UI_components/LanguageSwitcher/LanguageSwitcher';
import MessengerLinks from '../UI_components/MessengerLinks/MessengerLinks';

import './Header.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <LanguageSwitcher />

      <div className="contacts">
        <MessengerLinks />
        <ContactModalButton variant="icon" />
      </div>
    </div>
  );
};

export default TopBar;

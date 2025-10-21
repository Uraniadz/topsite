import MyPhone from '../UI_components/MyPhone/MyPhone';
import LinkSocial from '../UI_components/SocialLinks/LinkSocial';
import Whatsapp from '../UI_components/Whatsapp/Whatsapp';
import './Header.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <MyPhone />

      <div className="contacts">
        <LinkSocial />
        <Whatsapp />
      </div>
    </div>
  );
};

export default TopBar;

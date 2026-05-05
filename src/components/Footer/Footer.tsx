import './Footer.css';
import { Link } from 'react-router-dom';
import routesPath from '../../routes/routesPath';
import Logo from '@/assets/images/logo/logo.jpg';
import { useTranslation } from 'react-i18next';
import { CONTACTS } from '../../config/contact';
import MyEmail from '../UI_components/MyEmail/MyEmail';
import MessengerLinks from '../UI_components/MessengerLinks/MessengerLinks';
import LinkSocial from '../UI_components/SocialLinks/LinkSocial';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* 1. LOGO */}
        <div className="footer__col footer__brand">
          <Link to="/">
            <img src={Logo} alt="Logo" className="footer__logo" />
          </Link>
          <p className="footer__desc">{t('footer.description')}</p>
        </div>

        {/* 2. NAV */}
        <div className="footer__col">
          <h4 className="footer__title">{t('footer.titles.menu')}</h4>
          <nav className="footer__nav">
            <Link to={routesPath.home}>{t('footer.nav.home')}</Link>
            <Link to={routesPath.about}>{t('footer.nav.about')}</Link>
            <Link to={routesPath.price}>{t('footer.nav.price')}</Link>
            <Link to={routesPath.contact}>{t('footer.nav.contact')}</Link>
            <Link to={routesPath.cookies}>{t('footer.nav.cookies')}</Link>
          </nav>
        </div>

        {/* 3. CONTACTS */}
        <div className="footer__col">
          <h4 className="footer__title">{t('footer.titles.contact')}</h4>
          <MessengerLinks variant="footer" />
          <div className="footer__email">
            <MyEmail variant="footer" />
          </div>
        </div>

        {/* 4. SOCIALS */}
        <div className="footer__col">
          <h4 className="footer__title">{t('footer.titles.follow')}</h4>
          <div className="footer__socials">
            <LinkSocial variant="footer" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        {t('footer.bottom', {
          companyName: CONTACTS.companyName,
          year: `2023 - ${new Date().getFullYear()}`,
        })}
      </div>
    </footer>
  );
};

export default Footer;

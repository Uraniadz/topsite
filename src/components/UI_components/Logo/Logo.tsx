import routePath from '../../../routes/routesPath';
import logo from '@/assets/images/logo/logo-no-fon.svg';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to={routePath.home} className="logo">
      <img src={logo} alt="Codevix Studio" className="logo__img" />

      <div className="logo__text">
        <span className="logo__title">Codevix</span>
        <span className="logo__subtitle">Studio</span>
      </div>
    </Link>
  );
};

export default Logo;

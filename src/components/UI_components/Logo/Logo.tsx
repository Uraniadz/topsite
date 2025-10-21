import routePath from '../../../routes/routesPath';
import logo from '@/assets/images/logo/logo.jpg';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link to={routePath.home}>
        <img src={logo} alt="Логотип" className="logo-img" />
      </Link>
    </div>
  );
};

export default Logo;

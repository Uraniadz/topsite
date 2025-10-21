import './Header.css';
import NavBar from './NavBar';
import TopBar from './TopBar';

const Header = () => {
  return (
    <header className="header">
      <TopBar />
      <NavBar />
    </header>
  );
};

export default Header;

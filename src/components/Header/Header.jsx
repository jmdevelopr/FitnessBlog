import '../../styles/css/Header.min.css';
import Nav from './subcomponents/Nav';

const Header = () => {
    return (
        <div className="Header">
        <div className="logo">logo</div>
        <Nav />
      </div>
    );
}

export default Header;
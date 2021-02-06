import { Link } from 'react-router-dom';
import '../../../styles/css/Nav.min.css';

const Nav = () => {
    return (
        <nav className="Nav">
          <Link to="/">HOME</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/create">CREATE</Link>
          <Link to="/admin">ADMIN</Link>
          <Link to="/cart">CART</Link>
        </nav>
    )
}

export default Nav;
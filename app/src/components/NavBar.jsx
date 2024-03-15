import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
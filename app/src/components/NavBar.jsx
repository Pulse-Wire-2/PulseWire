import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to ="/Latest-News"> Latest News</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
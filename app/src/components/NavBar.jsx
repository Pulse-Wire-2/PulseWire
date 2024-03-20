import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">BestSeller</Link></li>
        <li><Link to ="/Latest-News"> Latest News</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <nav>
      <ul className="navLinks">
        <li className="pageLink"><Link to="/">Home</Link></li>
        <li className="pageLink"><Link to="/BestSeller">BestSeller</Link></li>
        <li className="pageLink"><Link to="/Latest-News"> Latest News</Link></li>
      </ul>
      <button>Toggle Theme</button>
    </nav>
    </>
  );
};

export default NavBar;
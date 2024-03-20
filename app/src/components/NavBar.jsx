import { Link } from "react-router-dom";
import { useContext } from "react";

const NavBar = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/BestSeller">BestSeller</Link></li>
        <li><Link to="/Latest-News"> Latest News</Link></li>
      </ul>
    </nav>
    <button>Toggle Theme</button>
    </>
  );
};

export default NavBar;
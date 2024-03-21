import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav className={theme === "light" ? "lightNav" : "darkNav"}>
        <ul className="navLinks">
          <li className="pageLink">
            <Link to="/">Home</Link>
          </li>
          <li className="pageLink">
            <Link to="/BestSeller">BestSeller</Link>
          </li>
          <li className="pageLink">
            <Link to="/Latest-News">Latest News</Link>
          </li>
        </ul>
        <ThemeToggleButton />
      </nav>
    </>
  );
};

export default NavBar;

import { NavLink } from "react-router-dom";

import logo from "../../asssets/logo.png";
import navbarCSS from "./navbar.module.css";
export const Navbar = () => {
  return (
    <nav className={navbarCSS.navbar}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div>
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Search by title and t..." />'
      </div>
    </nav>
  );
};

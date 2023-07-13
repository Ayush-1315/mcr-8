import { NavLink } from "react-router-dom";

import logo from "../../asssets/logo.png";
import navbarCSS from "./navbar.module.css";
import { useData } from "../../context/dataContext";
export const Navbar = () => {
  const {dispatch}=useData();
  const changeHandler=(e)=>{
    console.log(e.target.value)
    dispatch({type:"SEARCH",payload:e.target.value})
  }
  return (
    <nav className={navbarCSS.navbar}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div>
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Search by title and t..." onChange={changeHandler}/>'
      </div>
    </nav>
  );
};

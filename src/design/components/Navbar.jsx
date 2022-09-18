import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/login", {
      replace: true
    });
  };

  return (
    <>
    <nav>
      <div className="navcontainer">
        <Link to={"/"}>
          <Logo />
        </Link>
<div className="menu_bar">
        <NavLink
          className={({ isActive }) => `activo ${ isActive ? "activo" : ""}`}
          to="/inicio"
        >
          Inico
        </NavLink>
        <NavLink
          className={({ isActive }) => `Activo ${isActive ? "inactivo" : ""}`}
          to="/marvel"
        >
          MARVEL
        </NavLink>
        <NavLink
          className={({ isActive }) => `Activo ${isActive ? "inactivo" : ""}`}
          to="/dc"
        >
          DC
        </NavLink>
        <button  onClick={Logout}>Salir 👉</button>
      </div>
      </div>
    </nav>
   
    </>
  );
};

export default Navbar;

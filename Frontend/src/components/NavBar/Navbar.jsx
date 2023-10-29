import React, { useState, useRef, useEffect } from "react";
import "./Navbar.scss";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { Link, NavLink } from "react-router-dom";
import { images } from "../../constants";
const Navbar = () => {
 
  function refreshPage() {
    window.location.reload(false);
  }

  
  const [open, setOpen] = useState(true);
  const isOpen = () => {
    setOpen(false);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="merger">
        {/* <span className="borderanim" /> */}
        <Link to="/" className="title">
          <img src={images.logo} onClick={refreshPage} />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="nav-img">
            <img
              className="header_toggle"
              src={"https://cdn-icons-png.flaticon.com/128/5940/5940734.png"}
            />
          </div>
        </div>
        <ul className={menuOpen ? "open" : ""} >
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/work">Project</NavLink>
          </li>
          <li>
            <NavLink to="/footer">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

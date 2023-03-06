import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
<header id="navbar">
      <nav>
        <Link to='/'>home</Link>
        <Link to='/about'>about me</Link>
        <Link to='/portfolio'>portfolio</Link>
        <a href="mailto:parker.josie.eden@gmail.com" title="Contact Josie">contact me!</a>
      </nav>
    <h2>Josie Parker</h2>
    </header>
    </div>
  )
};

export default Navbar;
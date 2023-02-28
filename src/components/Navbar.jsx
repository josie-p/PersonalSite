import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
<header>
      <h1>Josie Parker</h1>
      <nav>
        <Link to='/'>home</Link>
        <Link to='/about'>about me</Link>
        <Link to='/portfolio'>portfolio</Link>
        <a href="mailto:parker.josie.eden@gmail.com" title="Contact Josie">contact me!</a>
      </nav>

    </header>
    </div>
  )
};

export default Navbar;
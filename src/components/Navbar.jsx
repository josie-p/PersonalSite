import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
<header>
      <h1>Josie Parker</h1>
      <nav>
        {/* <a href="/index.html">home</a>
        <a href="/about.html">about me</a>
        <a href="/portfolio.html">portfolio</a>
        <a href="mailto:emailme@example.com" title="Contact Josie"
          >contact me!</a
        > */}
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
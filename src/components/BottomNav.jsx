import React from 'react';
import { Link } from 'react-router-dom';
import insta from './images/insta2.png';
import linkedIn from './images/linked-in2.png';

const BottomNav = () => {
    return(
        <footer>
      <div className='footer-links'>
      <Link to='/'>home</Link>
        <Link to='/about'>about me</Link>
        <Link to='/portfolio'>portfolio</Link>
        <p>Don't hesitate to <a href="mailto:parker.josie.eden@gmail.com" title="Contact Josie">contact</a> me! </p>
        <div className='footer-sm'>
        <img src={insta} alt="Instagram Logo"
          />
          <img src={linkedIn} alt="LinkedIn Logo"
          />
        </div>
      </div>
    </footer>
    )
}
export default BottomNav;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <ul>Section
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <ul>Section
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <ul>Section
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <ul>Section
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        
      </div>
      <hr />
      <div className='container main_footer'>
        <p>copy right © 2022 react. All rights reserved.</p>
        <div>
          <Link to='/'><i className="fa-brands fa-linkedin-in"></i></Link>
          <Link to='/'><i className="fa-brands fa-facebook-f"></i></Link>
          <Link to='/'><i className="fa-brands fa-twitter"></i></Link>
          <Link to='/'><i className="fa-brands fa-youtube"></i></Link>
          <Link to='/'><i className="fa-brands fa-yahoo"></i></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;




import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav has-top-divider',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <div className='nav-left'>
        <h2>About Us</h2>
        <ul className="list-reset">
          <li>
            <Link to="#0">Whitepaper</Link>
          </li>
          <li>
            <Link to="#0">Blog</Link>
          </li>
          <li>
            <Link to="#0">Activity</Link>
          </li>
        </ul>
      </div>

      <div className='nav-right'>
        <h2>Support</h2>
        <ul className="list-reset">
          <li>
            <Link to="#0">Help & Support</Link>
          </li>
          <li>
            <Link to="#0">Community</Link>
          </li>
          <li>
            <Link to="#0">About profile</Link>
          </li>
          <li>
            <Link to="#0">Contact</Link>
          </li>
        </ul>
      </div>

      
    </nav>
  );
}

export default FooterNav;
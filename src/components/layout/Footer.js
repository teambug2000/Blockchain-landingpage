import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';
import Newslatter from './partials/Newslatter';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          
          <div className='foot-left space-between text-xxs'>
            {/* <Logo /> */}
            <h2>B.CTech</h2>
            <div className="footer-copyright mt-32 mb-50">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown</div>
            <div className='hidden'>
              <FooterSocial />
              <div className="footer-copyright" style={{marginTop: '82px'}}>All rights reserved@2021</div>
            </div>
          </div>

          <div className='foot-right'>
            <Newslatter />
            <FooterNav />
            <div className='hidden-2'>
              <FooterSocial />
              <div className="footer-copyright" >All rights reserved@2021</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
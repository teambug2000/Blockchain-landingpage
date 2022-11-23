import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our community with User reviews',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <Image src={require('./../../assets/images/arrow-left.svg')} alt='arrow-left' style={{marginLeft: '16px'}}/>
            <div className='titles-content'>

              <div className='titles-content-item'>
                <Image style={{top: '40%', position: 'absolute'}} className="char"
                    src={require('./../../assets/images/p.svg')}
                    alt="p" 
                />  
                <Image
                    src={require('./../../assets/images/avatar.svg')}
                    alt="avatar"
                  />
                <div className='titles-content-item-text'>
                  <p className="text-sm mb-0">
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown
                  </p>
                  <br/>
                  <p className="text-sm mb-0">
                    <b>-Dake M. Chile, Business Owner of Bellie</b>
                  </p>
                </div>
              </div>
            </div>
            <Image src={require('./../../assets/images/arrow-right.svg')} alt='arrow-left' style={{marginRight: '16px'}}/>
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
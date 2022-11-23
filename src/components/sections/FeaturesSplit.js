import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner ta-c',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap split-wrap-mobile',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );
  
  const mobile = classNames(
    'split-wrap split-wrap-mobile-2',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  )
  const sectionHeader = {
    title: 'How Do We Work Our System and Our Journey',
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
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.svg')}
                  alt="Features split 01"
                />
                <div className='ml-16 ta-l'>
                  <h3 className="mt-0 mb-12">
                    Consulting
                  </h3>
                  <p className="m-0">
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, 
                  </p>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/consulting.svg')}
                  alt="Features split 01"
                  width={85}
                  height={85} 
                />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className='ta-r mr-16'>
                  <h3 className="mt-0 mb-12">
                    Research & Complaince
                  </h3>
                  <p className="m-0">
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown
                  </p>
                </div>
                <Image
                  src={require('./../../assets/images/features-split-image-02.svg')}
                  alt="Features split 01"
                  width={85}
                  height={85} 
                />
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/research.svg')}
                  alt="Features split 02"
                />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.svg')}
                  alt="Features split 01"
                  width={85}
                  height={85} 
                />
                <div className='ml-16 ta-l'>
                  <h3 className="mt-0 mb-12">
                    Technology
                  </h3>
                  <p className="m-0">
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown
                  </p>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/technology.svg')}
                  alt="Features split 03"
                />
              </div>
            </div>
            
          </div>

          <div className={mobile}>

            <div className="split-item mobile">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.svg')}
                  alt="Features split 01"
                />
                <div className='ml-16 ta-l'>
                  <h3 className="mt-0 mb-12">
                    Consulting
                  </h3>
                  <p className="m-0">
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, 
                  </p>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-04.svg')}
                  alt="Features split 01"
                />
              </div>
            </div>

            <div className="split-item mobile-reverse">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className='ta-r mr-16'>
                  <h3 className="mt-0 mb-12">
                    Research & Complaince
                  </h3>
                  <p className="m-0">
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown
                  </p>
                </div>
                <Image
                  src={require('./../../assets/images/features-split-image-02.svg')}
                  alt="Features split 01"
                />
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.svg')}
                  alt="Features split 02"
                />
              </div>
            </div>

            <div className="split-item mobile">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.svg')}
                  alt="Features split 01"
                />
                <div className='ml-16 ta-l'>
                  <h3 className="mt-0 mb-12">
                    Technology
                  </h3>
                  <p className="m-0">
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown
                  </p>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.svg')}
                  alt="Features split 03"
                />
              </div>
            </div>
            
          </div>

          <Link to="#0" className="button button-primary button-wide-mobile button-sm btn-signup mt-100">Let’s See More</Link>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
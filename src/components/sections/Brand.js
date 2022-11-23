import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Brand = ({
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
        'features-split-inner section-inner-2',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );
    
    const tilesClasses = classNames(
        'tiles-wrap center-content',
    );

    return (
        <section 
            {...props}
            className={outerClasses}
        >
            <div className="container split-detail">
                <div className={innerClasses}>
                    <div className={tilesClasses}>
                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/coin.svg')}
                                            alt="Features tile 01"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/brand.svg')}
                                            alt="Features tile 02"
                                            width={310}
                                            // height={35}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/binance.svg')}
                                            alt="Features tile icon 01"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/bitmex.svg')}
                                            alt="Features tile icon 01"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='split-group'>
                <Image
                    src={require('./../../assets/images/brand2.svg')}
                    alt="Features tile icon 01"
                />
            </div>
        </section>
    )
}

Brand.propTypes = propTypes;
Brand.defaultProps = defaultProps;

export default Brand;
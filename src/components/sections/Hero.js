import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import ButtonGroup from '../elements/ButtonGroup';
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  const { i18n, t } = useTranslation(["common"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              {t("Build the future with")}
              {/* <span className="text-color-primary">startups</span> */}
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                {t("Blockchain technology and Currency")}
              </p>
              <div className="reveal-from-bottom mt-72" data-reveal-delay="600">
                <a className="hidden-img show-img" href="#0">
                  <Image
                    className="has-shadow"
                    src={require("./../../assets/images/1.png")}
                    alt="Hero"
                    width={896}
                    height={504}
                  />
                </a>
                <Button tag="button" color="alert" wideMobil>
                  {t("Get Whitepaper")}
                </Button>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              className="hidden-img"
              // data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              // onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/1.png")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

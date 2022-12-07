import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const About = ({
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
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner ta-c pl-32 pr-32",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "",
    paragraph: "",
  };
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
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-about-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">{t("About us")}</h3>
                <p className="m-0">
                  {t(
                    "A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown"
                  )}
                </p>
                <br />
                <p>
                  {t(
                    "printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown"
                  )}
                </p>
                <Link
                  to="#0"
                  className="button button-primary button-wide-mobile button-sm btn-signup"
                >
                  {t("Learn more")}
                </Link>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/marketplace.svg")}
                  alt="Features split 01"
                  width={85}
                  height={85}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;

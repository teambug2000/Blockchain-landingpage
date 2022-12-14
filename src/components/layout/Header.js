import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import Image from "../elements/Image";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
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
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          {!hideNav && (
            <Image
              className="header-nav-toggle"
              src={require("./../../assets/images/avatar2.svg")}
              alt="avatar2"
              width={32}
              height={32}
            />
          )}
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  {!hideSignin && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Link to="#0" onClick={closeMenu}>
                          {t("About us")}
                        </Link>
                      </li>
                      <li>
                        <Link to="#0" onClick={closeMenu}>
                          {t("Services")}
                        </Link>
                      </li>
                      <li>
                        <Link to="#0" onClick={closeMenu}>
                          {t("How it works")}
                        </Link>
                      </li>
                      <li>
                        <Link to="#0" onClick={closeMenu}>
                          {t("Community")}
                        </Link>
                      </li>
                      <li>
                        <select
                          value={localStorage.getItem("i18nextLng")}
                          onChange={handleLanguageChange}
                        >
                          <option value="vi">VI</option>
                          <option value="en">EN</option>
                          <option value="de">DE</option>
                          <option value="ja">JA</option>
                          <option value="kr">KR</option>
                        </select>
                      </li>
                      <li>
                        <Link
                          to="#0"
                          className="button button-primary button-wide-mobile button-sm btn-signup"
                          onClick={closeMenu}
                        >
                          {t("Join for free")}
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

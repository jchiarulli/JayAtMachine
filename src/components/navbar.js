import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaPatreon,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import classes from "./navbar.module.less";
import useWindowSize from "../utils/useWindowSize";

const Navbar = ({ siteTitle, location }) => {
  const [isMenuCollapsing, setIsMenuCollapsing] = useState(true);
  const [isMenuCollapseComplete, setIsMenuCollapseComplete] = useState(true);
  const [isToggleDisabled, setIsToggleDisabled] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
  const [
    shouldSmallNavbarStateReset,
    setShouldSmallNavbarStateReset,
  ] = useState(false);

  const { width } = useWindowSize();
  useEffect(() => {
    // console.log("here");
    if (width > 1025 && shouldSmallNavbarStateReset) {
      // console.log("if width > 1025");
      setShouldSmallNavbarStateReset(false);
      setIsTransitionEnabled(false);
      setIsMenuCollapsing(true);
      setIsMenuCollapseComplete(true);
      setIsToggleDisabled(false);
      document.getElementsByTagName("html")[0].style.overflow = "";
    } else if (width <= 1025 && !shouldSmallNavbarStateReset) {
      // console.log("else if width <= 1025");
      setShouldSmallNavbarStateReset(true);
    }
  }, [width]);

  const closeMenuWhenCurrentLinkPressed = (toValue) => {
    // console.log("location in closeMenuWhenCurrentLinkPressed", location);
    if (
      location.pathname === toValue &&
      (!isMenuCollapseComplete || isToggleDisabled)
    ) {
      // console.log("menu is not collapsed");
      setIsTransitionEnabled(false);
      setIsMenuCollapsing(true);
      setIsMenuCollapseComplete(true);
      setIsToggleDisabled(false);
      document.getElementsByTagName("html")[0].style.overflow = "";
    } else if (
      location.pathname !== toValue &&
      (!isMenuCollapseComplete || isToggleDisabled)
    ) {
      // console.log("different linked clicked");
      document.getElementsByTagName("html")[0].style.overflow = "";
    }
  };

  const toggleMenu = () => {
    if (!isToggleDisabled) {
      if (isMenuCollapsing) {
        // console.log("Set html overflow to hidden");
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
      }

      setIsMenuCollapsing(!isMenuCollapsing);
      setIsToggleDisabled(true);

      if (!isTransitionEnabled) {
        setIsTransitionEnabled(true);
      }
    }
  };

  const handleTransitionEnd = (eventPropertyName) => {
    if (eventPropertyName === "transform") {
      setIsMenuCollapseComplete(!isMenuCollapseComplete);
      setIsToggleDisabled(false);
      if (isMenuCollapsing) {
        // console.log("Set html overflow to auto");
        document.getElementsByTagName("html")[0].style.overflow = "";
      }
      // console.log("Transition finsihed");
    }
  };

  return (
    <nav
      className={[
        !isMenuCollapseComplete && classes.menuCollapseIncomplete,
        isMenuCollapsing ? classes.collapseMenu : classes.expandMenu,
      ].join(" ")}
    >
      {/* {console.log("isToggleDisabled", isToggleDisabled)} */}
      {/* {console.log("isMenuCollapseComplete", isMenuCollapseComplete)} */}
      {/* {console.log("width", width)} */}
      <ul className={classes.home_and_toggle}>
        <li className={classes.logo}>
          <Link to="/" onClick={() => closeMenuWhenCurrentLinkPressed("/")}>
            Jay@Machine
          </Link>
        </li>
        <li>
          <FaBars
            className={[
              classes.bars,
              isTransitionEnabled
                ? classes.enableTransition
                : classes.disableTransition,
            ].join(" ")}
            onClick={toggleMenu}
          />
          <FaTimes
            className={[
              classes.times,
              isTransitionEnabled
                ? classes.enableTransition
                : classes.disableTransition,
            ].join(" ")}
            onClick={toggleMenu}
          />
        </li>
      </ul>
      <ul
        className={[
          classes.pages,
          isTransitionEnabled
            ? classes.enableTransition
            : classes.disableTransition,
        ].join(" ")}
        onTransitionEnd={(e) => handleTransitionEnd(e.propertyName)}
      >
        <li>
          <Link
            to="/blog"
            onClick={() => closeMenuWhenCurrentLinkPressed("/blog")}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link to="/blog">Topics</Link>
        </li>
        <li>
          <Link to="/about">Contact</Link>
        </li>
        <li>
          <Link to="/services">Donate</Link>
        </li>
      </ul>
      <ul
        className={[
          classes.social,
          isTransitionEnabled
            ? classes.enableTransition
            : classes.disableTransition,
        ].join(" ")}
      >
        <li>
          <a href="#">
            <FaYoutube style={{ color: "#FF0000" }}></FaYoutube>
          </a>
        </li>
        <li>
          <a href="#">
            <FaDiscord style={{ color: "#7289da" }}></FaDiscord>
          </a>
        </li>
        <li>
          <a href="https://github.com/jchiarulli">
            <FaGithub style={{ color: "#fafafa" }}></FaGithub>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jason-chiarulli-321358143/">
            <FaLinkedin style={{ color: "#2867B2" }}></FaLinkedin>
          </a>
        </li>
        <li>
          <a href="#">
            <FaPatreon style={{ color: "#f96854" }}></FaPatreon>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;

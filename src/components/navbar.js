import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import classes from "./navbar.module.less";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaPatreon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = ({ siteTitle }) => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stillFullHeight, setstillFullHeight] = useState(false);

  const toggleMenu = () => {
    setMenuCollapsed(!isMenuCollapsed);
    setIsDisabled(true);
  };

  const handleTransitionEnd = (e) => {
    // console.log(e.propertyName);
    if (e.propertyName === "transform") {
      setIsCollapsed(!isCollapsed);
      setstillFullHeight(!stillFullHeight);
      setIsDisabled(false);
    }
  };

  return (
    <nav
      // className={isMenuCollapsed ? classes.collapsedMenu : classes.expandedMenu}
      className={[
        stillFullHeight ? classes.fullHeight : classes.notFullHeight,
        isMenuCollapsed ? classes.collapsedMenu : classes.expandedMenu,
      ].join(" ")}
    >
      {console.log(isDisabled)}
      <ul className={classes.home_and_toggle}>
        <li className={classes.logo}>
          <Link to="/">Jay@Machine</Link>
        </li>
        <li className={classes.toggle}>
          <FaBars
            // className={classes.bars}
            className={[
              classes.bars,
              isDisabled ? classes.disabled : classes.enabled,
            ].join(" ")}
            onClick={toggleMenu}
          />
          <FaTimes
            // className={classes.times}
            className={[
              classes.times,
              isDisabled ? classes.disabled : classes.enabled,
            ].join(" ")}
            onClick={toggleMenu}
            // disabled={isDisabled}
          />
        </li>
      </ul>
      <ul
        className={[
          classes.pages,
          isCollapsed ? classes.inactive : classes.active,
        ].join(" ")}
        // className={classes.pages}
        onTransitionEnd={(e) => handleTransitionEnd(e)}
      >
        <li>
          <Link to="/blog">Blog</Link>
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
          isCollapsed ? classes.inactive : classes.active,
        ].join(" ")}
        // className={classes.social}
      >
        <li>
          <a href="#">
            <FaYoutube></FaYoutube>
          </a>
        </li>
        <li>
          <a href="#">
            <FaDiscord></FaDiscord>
          </a>
        </li>
        <li>
          <a href="#">
            <FaGithub></FaGithub>
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin></FaLinkedin>
          </a>
        </li>
        <li>
          <a href="#">
            <FaPatreon></FaPatreon>
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

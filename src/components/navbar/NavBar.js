import React from 'react';
import classNames from 'classnames';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './navBar.module.scss'
import Profile from "../profile/Profile";

const NavBar = () => {
  return (
      <nav>
        <div className={classNames(styles.home, styles.option)}><FontAwesomeIcon icon={faHome}/></div>
        <div className={classNames(styles.option)}><Profile /></div>
      </nav>
  )
};

export default NavBar;

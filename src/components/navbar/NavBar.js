import React from 'react';
import classNames from 'classnames';
import {faColumns, faHome, faCalendar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './navBar.module.scss'
import Profile from "../profile/Profile";
import Accordion from "../accordion/Accordion";

const navBarOptions = [
  {
    header: {
      icon: faColumns,
      label: 'Dashboard',
      isOpen: true,
    },
    options: [
      {label: 'Page Visitors'},
      {label: 'Post Performance'},
      {label: 'Team Overall'},
    ]
  },
  {
    header: {
      icon: faCalendar,
      label: 'Calender',
    },
  }
];

const NavBar = () => {
  return (
      <nav>
        <div className={classNames(styles.home, styles.option)}><FontAwesomeIcon icon={faHome}/></div>
        <div className={classNames(styles.option)}><Profile/></div>
        {
          navBarOptions.map(option => (
              <div className={classNames(styles.option)} key={option.header.label}>
                <Accordion {...option}/>
              </div>
          ))
        }
      </nav>
  )
};

export default NavBar;

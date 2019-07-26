import React from 'react';
import classNames from 'classnames';
import {faCalendar, faColumns, faHome, faInbox, faReceipt, faVial,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Profile from "../profile/Profile";
import Accordion from "../accordion/Accordion";
import RecentlyViewed from "../recentlyViewed/RecentlyViewed";

import Button from "../button/Button";
import styles from './navBar.module.scss'

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
  },
  {
    header: {
      icon: faInbox,
      label: 'Inbox',
    },
    options: [
      {label: 'Starred'},
      {label: 'Others'},
    ]

  },
  {
    header: {
      icon: faReceipt,
      label: 'Invoicing',
    },
  },
  {
    header: {
      icon: faVial,
      label: 'Lab / Experimental',
    },
  },
];

const NavBar = () => {
  return (
      <nav>
        <Button className={classNames(styles.home, styles.option)}>
          <FontAwesomeIcon icon={faHome}/>
        </Button>
        <div className={classNames(styles.option)}><Profile/></div>
        <div className={styles.scrollable}>
          {
            navBarOptions.map(option => (
                <div className={classNames(styles.option, styles.secondaryOption)} key={option.header.label}>
                  <Accordion {...option}/>
                </div>
            ))
          }
          <div className={classNames(styles.option, styles.secondaryOption)}><RecentlyViewed/></div>
        </div>
      </nav>
  )
};

export default NavBar;

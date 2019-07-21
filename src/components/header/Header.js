import React from 'react';
import styles from './header.module.css';
import Select from "../select/Select";
import FlagIcon from "../flagIcon/FlagIcon";

const Header = () => {
  const languageOptions = [
    {value: 'en', label: <span><FlagIcon code="gb" className={styles.flagIcon}/>Eng</span> },
    {value: 'fr', label: <span><FlagIcon code="fr" className={styles.flagIcon}/>French</span> },
  ];

  return (
      <header>
        <strong>Dashboard</strong>
        <Select
            options={languageOptions}
            className={styles.languageSelect}
        />
      </header>
  )
};

export default Header;

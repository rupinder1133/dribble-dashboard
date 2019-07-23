import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './recentlyViewed.module.scss';
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RecentlyViewed = ({
    className
}) => (
    <div className={classNames(styles.container, className)}>
      <div className={styles.header}>Recently Viewed</div>
      <button className={styles.option}>Overall Performance <FontAwesomeIcon icon={faLongArrowAltRight}/></button>
      <button className={styles.option}>Invoice #930 <FontAwesomeIcon icon={faLongArrowAltRight}/></button>
      <button className={styles.option}>Customer: Minerva Viewer <FontAwesomeIcon icon={faLongArrowAltRight}/></button>
    </div>
);
RecentlyViewed.propTypes = {
  className: PropTypes.string,
};

export default RecentlyViewed;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './recentlyViewed.module.scss';
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../button/Button";

const RecentlyViewed = ({
    className
}) => (
    <div className={classNames(styles.container, className)}>
      <div className={styles.header}>Recently Viewed</div>
      <Button className={styles.option}>Overall Performance <FontAwesomeIcon icon={faLongArrowAltRight}/></Button>
      <Button className={styles.option}>Invoice #930 <FontAwesomeIcon icon={faLongArrowAltRight}/></Button>
      <Button className={styles.option}>Customer: Minerva Viewer <FontAwesomeIcon icon={faLongArrowAltRight}/></Button>
    </div>
);
RecentlyViewed.propTypes = {
  className: PropTypes.string,
};

export default RecentlyViewed;

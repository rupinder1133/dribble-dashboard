import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './swing.module.scss';

const Swing = ({
                 swing,
               }) => {
  const sign = swing > 0 ? '+' : '';

  return (
      <span className={classNames(styles.swing, { [styles.isPositive]: swing > 0 })}>
          {sign}
          {swing}
          <FontAwesomeIcon className={styles.icon} icon={faExternalLinkSquareAlt} />
      </span>
  );
};
Swing.propTypes = {
  swing: PropTypes.number.isRequired,
};

export default Swing;

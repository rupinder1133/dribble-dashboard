import React from 'react';
import PropTypes from 'prop-types';
import styles from './loader.module.scss'

const Loader = ({children, isLoading}) => (
    <Choose>
      <When condition={isLoading}>
        <div className={styles.container}>
          <div className={styles.ldsRing}>
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
        </div>
      </When>
      <Otherwise>
        {children}
      </Otherwise>
    </Choose>
);
Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;

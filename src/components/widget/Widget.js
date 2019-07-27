import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './widget.module.scss';

const Widget = ({
                  children,
                  className,
                }) => (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
);
Widget.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Widget;

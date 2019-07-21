import React from 'react';
import classNames from 'classnames';
import styles from './userStatus.module.scss';

const UserStatus = ({ className }) => (
    <div className={classNames(styles.status, styles.online, className)}/>
);

export default UserStatus;

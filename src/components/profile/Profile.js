import React from 'react';
import classNames from 'classnames';
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserStatus from "../userStatus/UserStatus";

import Button from "../button/Button";
import styles from './profile.module.scss';

const Profile = () => (
    <div className={styles.profile}>
      <div className={classNames(styles.image, styles.profileElements)}>
        <Button className={styles.settings} onFocusClassName={styles.settingsOnFocus}>
          <FontAwesomeIcon icon={faCog}/>
        </Button>
      </div>
      <div className={classNames(styles.name, styles.profileElements)}>
        <strong>Martha Blair</strong>
        <UserStatus className={styles.status}/>
      </div>
      <div className={classNames(styles.description, styles.profileElements)}>Developer</div>
    </div>
);

export default Profile;

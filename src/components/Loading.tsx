import React from 'react';

import styles from '../styles/pages/Loading.module.css';

import Logo from '../../public/logo.svg';
import Moveit from '../../public/moveit.svg';

export default function Loading(): JSX.Element {
  return (
    <div className={styles.loading}>
      <Logo />
      <Moveit />
    </div>
  );
}

import React from 'react';

import styles from './SideBar.module.css';

export const SideBar = () => {
  // TODO: Create a SideBar
  console.log('Nav');
  return (
    <nav className={styles.nav}>
      <div className={styles.user}>user</div>
      <div className={styles.navigation}>
        <div>nav 1</div>
        <div>nav 2</div>
        <div>nav 3</div>
      </div>
    </nav>
  )
};


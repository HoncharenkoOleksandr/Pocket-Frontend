import classnames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { Icon } from '@common';
import { ROUTES } from '@utils';

import styles from './SideBar.module.css';

const navMock = [
  { id: 0, title: 'Dashboard', iconName: 'Dashboard', to: ROUTES.DASHBOARD },
  { id: 1, title: 'Accounts & Users', iconName: 'Accounts', to: ROUTES.ACCOUNTS },
  { id: 2, title: 'Pocket', iconName: 'Pocket', to: ROUTES.POCKET },
  { id: 3, title: 'Settings', iconName: 'Settings', to: ROUTES.SETTINGS }
];

export const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <div className={styles.navigation}>
        {navMock.map((nav) => (
          <div key={nav.id}>
            <Link
              to={nav.to}
              className={classnames(
                styles.navigation__item,
                styles.dashboard,
                pathname === nav.to && styles.active
              )}
            >
              <div className={styles.icon__wrapper}>
                <Icon name={nav.iconName} />
              </div>
              {nav.title}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

import classnames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import NoAvatar from '@assets/images/NoAvatar.png';
import { Icon, IconLogout } from '@common';
import { ROUTES, useGetUser } from '@utils';

import styles from './SideBar.module.css';

const navMock = [
  { id: 0, title: 'Dashboard', iconName: 'Dashboard', to: ROUTES.DASHBOARD },
  { id: 1, title: 'Accounts & Users', iconName: 'Accounts', to: ROUTES.ACCOUNTS },
  { id: 2, title: 'Pocket', iconName: 'Pocket', to: ROUTES.POCKET },
  { id: 3, title: 'Settings', iconName: 'Settings', to: ROUTES.SETTINGS }
];

export const SideBar = () => {
  const { pathname } = useLocation();
  const { data } = useGetUser();
  const userName = data?.data?.name;
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
      <div className={styles.user__wrapper}>
        <div className={styles.divider} />
        <div className={styles.user}>
          <div>
            {/* <span className={styles.user__icon} /> */}
            <img src={NoAvatar} className={styles.user__icon} alt='No Avatar' />
            <div className={styles.user__name}>{userName}</div>
          </div>
          <IconLogout className={styles.logout} />
        </div>
      </div>
    </nav>
  );
};

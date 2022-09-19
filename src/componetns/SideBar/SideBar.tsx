import React from 'react';

import {IconAccount, IconDashboard, IconSettings} from "@common";

import {Accordion} from "./components";

import styles from './SideBar.module.css';

export const SideBar = () => (
    <nav className={styles.nav}>
        <div className={styles.navigation}>
            <div className={`${styles.navigation__item} ${styles.dashboard}`}>
                <div className={styles.icon__wrapper}><IconDashboard/></div>
                Dashboard
            </div>
            <div className={`${styles.navigation__item} ${styles.user}`}>
                <div className={styles.icon__wrapper}><IconAccount/></div>
                Accounts & Users
            </div>
            <Accordion/>
            <div className={`${styles.navigation__item} ${styles.settings}`}>
                <div className={styles.icon__wrapper}><IconSettings/></div>
                <div>Settings</div>
            </div>
        </div>
    </nav>
);


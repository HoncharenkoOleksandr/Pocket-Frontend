import React from 'react';

import {SideBar} from "../../componetns";

import styles from './Main.module.css';

export const Main = () =>
    <div className={styles.Main}>
        <SideBar/>
        <div>Main</div>
    </div>;

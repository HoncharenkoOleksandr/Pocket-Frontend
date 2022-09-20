import React, {useState} from 'react';

import {IconArrow, IconPocket} from "@common";

import styles from '../../SideBar.module.css';

export const Accordion = () => {
    const [isActive, setIsActive] = useState(false);

    const onAccordionClick = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className={`${styles.navigation__item} ${styles.accordion}`} onClick={onAccordionClick}
                 onKeyDown={onAccordionClick}
                 aria-hidden="true"
            >
                <div className={styles.icon__wrapper}><IconPocket/></div>
                <div>Pocket</div>
                <div className={styles.icon__arrow}><IconArrow transformValue={isActive ? 180 : 0}/></div>
            </div>
            {isActive &&
                (
                    <div className={styles.accordion__item__wrapper}>
                        <div className={styles.accordion__item}>List</div>
                        <div className={styles.accordion__item}>Something</div>
                        {/*    TODO border */}
                    </div>
                )}
        </>
    );
}


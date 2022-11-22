import React from 'react';

import { Layout } from '@components';
import { usePocketAll } from '@utils';

import { Card } from '../../components/Card';

import styles from './Main.module.css';

export const Main = () => {
  const { data } = usePocketAll();
  const pocket = data?.data?.pocket;
  return (
    <Layout>
      <section className={styles.cards__wrapper}>
        {pocket &&
          pocket.map((element: any) => (
            <Card name={element.name} date={element.date} desc={element.desc} link={element.link} />
          ))}
      </section>
    </Layout>
  );
};

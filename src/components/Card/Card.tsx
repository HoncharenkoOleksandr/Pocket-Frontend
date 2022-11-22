import React from 'react';

import { useUrlPreview } from '@utils';

import styles from './Card.module.css';

interface CardProps {
  name: string;
  date: string;
  desc: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({ name, date, desc, link }) => {
  const { data } = useUrlPreview(link);
  const previewData = data?.data;
  console.log(data);
  return (
    <a className={styles.card} href={link}>
      <div className={styles.card__preview}>
        <img className={styles.card__preview__image} src={previewData?.image} alt='Preview' />
      </div>
      <div className={styles.card__info}>
        <span>{name}</span>
        <span>{previewData?.title}</span>
        {desc && <span>{desc}</span>}
      </div>
    </a>
  );
};

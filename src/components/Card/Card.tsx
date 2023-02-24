import React from 'react';

import styles from './Card.module.css';

interface CardProps {
  name: string;
  date: string;
  link: string;
  title: string;
  description: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ name, date, description, link, title, image }) => (
  <a className={styles.card} href={link}>
    <div className={styles.card__preview}>
      <img className={styles.card__preview__image} src={image} alt={title} />
    </div>
    <div className={styles.card__info}>
      <span>{name}</span>
      <span>{title}</span>
      {description && <span>{description}</span>}
    </div>
  </a>
);

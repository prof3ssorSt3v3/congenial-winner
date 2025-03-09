import React from 'react';
import styles from './listtile.module.css';
//rafce

const ListTile = ({ info, action }) => {
  const { title, subtitle, content, btn } = info;

  return (
    <div className={styles.tile}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.content}>{content}</p>
      <div className={styles.actions}>
        <button onClick={action}>{btn}</button>
      </div>
    </div>
  );
};

export default ListTile;

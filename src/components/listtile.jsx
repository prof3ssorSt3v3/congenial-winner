import React from 'react';
import styles from './listtile.module.css';
//rafce

const ListTile = ({ info, action }) => {
  //info and action are destructured from props
  const { brand, name, style, hop } = info;

  return (
    <div className={styles.tile}>
      <h2 className={styles.title}>{brand}</h2>
      <h3 className={styles.subtitle}>{name}</h3>
      <p className={styles.content}>{style}</p>
      <div className={styles.actions}>
        <button onClick={action}>{hop}</button>
      </div>
    </div>
  );
};

export default ListTile;

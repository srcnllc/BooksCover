import styles from './Container.module.scss';
import React from 'react';

export default function Container({ children, large }) {
  return (
    <div className={`${styles.container} ${large ? styles.large : ''}`}>
      {children}
    </div>
  );
}

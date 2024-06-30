import React from 'react'
import styles from './Header.module.scss';

export default function Header({activeIndex,setActiveIndex} ) {
    const navList = [
        {
          title: 'Choose Book',
        },
        {
          title: 'Edit Cover',
        },
        {
          title: 'Preview & Download',
        },
      ];
      const handleClick = (index) => {
        setActiveIndex(index);
      };
  return (
    <div className={styles.header}>
    <ul>
      {navList.map((item, index) => (
        <li key={index} className={activeIndex === index ? styles.active : ''} onClick={() => handleClick(index)}>
          {item.title}
        </li>
      ))}
    </ul>
  </div>
  )
}

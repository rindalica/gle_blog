import React from 'react';
import styles from '././page.module.css';
import ResultMenu from './components/ResultMenu';
import Link from 'next/link';
import MenuList from './components/MenuList';

export default function page() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Link className={styles.link_home} href='/toy'>
          🏠
        </Link>
        <div className={styles.title}>메뉴 추천</div>
        <MenuList />
      </div>
    </div>
  );
}

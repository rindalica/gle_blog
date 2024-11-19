import React from 'react';
import styles from '././page.module.css';
import ResultMenu from './components/ResultMenu';
import Link from 'next/link';

import MenuList from './components/MenuList';
import { getAllMenu } from '@/service/menu';

export default async function page() {
  const menuData = await getAllMenu();

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Link className={styles.link_home} href='/toy'>
          🏠
        </Link>
        <div className={styles.title}>메뉴 추천</div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.row}>
              <th className={styles.head}>메뉴</th>
              <th className={styles.head}>상호</th>
              <th className={styles.head}>식사 / 디저트</th>
              {/* <th className={styles.head}>삭제</th> */}
            </tr>
          </thead>
          <tbody>
            <MenuList />
          </tbody>
        </table>
        <ResultMenu data={menuData} />
        <div></div>
      </div>
    </div>
  );
}

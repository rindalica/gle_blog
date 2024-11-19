import React from 'react';
import DeleteBtn from './DeleteBtn';
import styles from '../page.module.css';
import { getAllMenu } from '@/service/menu';

export default async function MenuList() {
  const menuData = await getAllMenu();

  return (
    <>
      {menuData.map((menu, idx) => {
        return (
          <tr className={styles.row} key={idx}>
            <td className={styles.data_row}>{menu.menu}</td>
            <td className={styles.data_row}>{menu.storeNm}</td>
            <td className={styles.data_row}>{menu.isMeal}</td>
            {/* <td className={styles.data_row}>
              <DeleteBtn data={menuData} idx={idx} />
            </td> */}
          </tr>
        );
      })}
    </>
  );
}

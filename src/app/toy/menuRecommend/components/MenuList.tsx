'use client';

import React, { useEffect, useState } from 'react';
import DeleteBtn from './DeleteBtn';
import ResultMenu from './ResultMenu';
import styles from '../page.module.css';
import { client } from '@/service/sanity';

type Menu = {
  _id?: string;
  menuNm: string;
  storeNm: string;
  category: string;
};

export default function MenuList() {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [selected, setSelected] = useState('');

  // 데이터를 서버에서 초기화
  const fetchMenus = async () => {
    const query = `*[_type == "menu"]`; //업데이트 순으로 정렬 (최신이 먼저오도록))
    const data = await client.fetch(query);
    console.log(data);

    setMenu(data);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleDeleteMenu = async (id: string) => {
    // setLoading(true);
    try {
      await client.delete(id); // 문서가 존재하면 삭제
      await fetchMenus(); // 서버에서 데이터를 다시 가져옴.
    } catch (error) {
      console.error('Failed to delete todo:', error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.head}>메뉴</th>
            <th className={styles.head}>상호</th>
            <th className={styles.head}>식사 / 디저트</th>
            <th className={styles.head}>삭제</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((menu) => {
            return (
              <tr
                className={styles.row}
                key={menu._id}
                onClick={() => {
                  setSelected(menu.menuNm);
                }}
              >
                <td className={styles.data_row}>{menu.menuNm}</td>
                <td className={styles.data_row}>{menu.storeNm}</td>
                <td className={styles.data_row}>{menu.category}</td>
                <td className={styles.data_row}>
                  <button
                    onClick={() => {
                      handleDeleteMenu(menu._id || '');
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ResultMenu data={menu} />
    </>
  );
}

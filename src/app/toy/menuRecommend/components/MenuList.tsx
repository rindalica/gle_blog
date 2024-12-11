'use client';

import React, { useEffect, useState } from 'react';
import ResultMenu from './ResultMenu';
import styles from '../page.module.css';
import { client } from '@/service/sanity';
import AddMenuModal from './AddMenuModal';
import Loading from '@/app/loading';

type Menu = {
  _id?: string;
  menuNm: string;
  storeNm: string;
  category: string;
};

export default function MenuList() {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAddMenuModal, setAddMenuModal] = useState(false);

  // 데이터를 서버에서 초기화
  const fetchMenus = async () => {
    const query = `*[_type == "menu"]`;
    const data = await client.fetch(query);

    setMenu(data);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleDeleteMenu = async (id: string) => {
    setLoading(true);
    try {
      await client.delete(id); // 문서가 존재하면 삭제
      await fetchMenus(); // 서버에서 데이터를 다시 가져옴.
    } catch (error) {
      console.error('Failed to delete todo:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.head}>메뉴</th>
            <th className={styles.head}>상호</th>
            <th className={styles.head}>카테고리</th>
            <th className={styles.head}>삭제</th>
          </tr>
        </thead>
        {loading ? (
          <Loading />
        ) : (
          <tbody>
            {menu.map((menu) => {
              return (
                <tr className={styles.row} key={menu._id}>
                  <td className={styles.data_row}>{menu.menuNm}</td>
                  <td className={styles.data_row}>{menu.storeNm}</td>
                  <td
                    className={styles.data_row}
                    style={{ textAlign: 'center' }}
                  >
                    {menu.category}
                  </td>
                  <td
                    className={styles.data_row}
                    style={{ textAlign: 'center' }}
                  >
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
            <tr className={styles.row}>
              <td
                className={styles.data_row}
                colSpan={4}
                style={{ textAlign: 'center' }}
              >
                <button
                  onClick={() => {
                    setAddMenuModal(true);
                  }}
                >
                  메뉴 추가
                </button>
              </td>
            </tr>
          </tbody>
        )}
      </table>
      <ResultMenu data={menu} />
      {isAddMenuModal && (
        <AddMenuModal
          setAddMenuModal={setAddMenuModal}
          fetchMenus={fetchMenus}
        />
      )}
    </>
  );
}

'use client';

import React, { useState } from 'react';
import styles from './resultMenu.module.css';

interface IProps {
  data: { menuNm: string; storeNm: string; category: string }[];
}
export default function ResultMenu({ data }: IProps) {
  const [selectedMenu, setSelectedMenu] = useState('뭐 먹지?');
  const [isModalOpen, setModalOpen] = useState(false);

  const getRandomMenu = () => {
    const getRandomIdx = Math.floor(Math.random() * data.length);

    const randomMenu = data.find((menu, idx) => {
      return idx === getRandomIdx;
    });

    if (randomMenu) {
      setSelectedMenu(randomMenu.menuNm);
    }
  };

  return (
    <>
      <button
        className={styles.btn}
        onClick={() => {
          getRandomMenu();
          setModalOpen(true);
        }}
      >
        뭐 먹지???
      </button>
      {isModalOpen && (
        <div className={styles.result_modal}>
          <div
            className={styles.close_btn}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            ✖️
          </div>
          <div>{selectedMenu}</div>
        </div>
      )}
    </>
  );
}

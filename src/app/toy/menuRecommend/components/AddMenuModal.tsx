'use client';

import React, { useState } from 'react';
import styles from '../page.module.css';
import { client } from '@/service/sanity';

type FormData = {
  menuNm: string;
  storeNm: string;
  category: string;
};

interface IProps {
  setAddMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
  fetchMenus: () => Promise<void>;
}
export default function AddMenuModal({ setAddMenuModal, fetchMenus }: IProps) {
  const [formData, setFormData] = useState<FormData>({
    menuNm: '',
    storeNm: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 제출 동작 방지
    console.log('Form Submitted:', formData);
    const { menuNm, storeNm, category } = formData;
    try {
      await client.create({
        _type: 'menu',
        menuNm,
        storeNm,
        category,
      });
      await fetchMenus(); // 서버에서 데이터를 다시 가져옴.
    } catch (error) {
      console.error('Failed to add menu', error);
    } finally {
      setAddMenuModal(false);
    }
  };

  return (
    <div className={styles.add_modal}>
      <div className={styles.modal_title}>메뉴 추가</div>
      <button
        className={styles.close_btn}
        onClick={() => {
          setAddMenuModal(false);
        }}
      >
        ✖️
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>
            <div>메뉴명</div>
            <input
              type='text'
              name='menuNm'
              value={formData.menuNm}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <div>상호명</div>
            <input
              type='text'
              name='storeNm'
              value={formData.storeNm}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <div>카테고리</div>
            <input
              type='text'
              name='category'
              value={formData.category}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type='submit'>확인</button>
      </form>
    </div>
  );
}

'use client';

import { deleteMenu } from '@/service/menu';
import React from 'react';

interface IProps {
  data: { menu: string; storeNm: string; isMeal: string }[];
  idx: number;
}

export default function DeleteBtn({ data, idx }: IProps) {
  const handleDelete = async () => {
    const menuName = data[idx].menu; // 삭제할 메뉴의 이름 가져오기
    try {
      await deleteMenu(menuName); // 서버에서 메뉴 삭제
      console.log(`Menu "${menuName}" has been deleted.`);

      // 로컬 상태 업데이트
      const updatedData = data.filter((_, i) => i !== idx);
      // onUpdate(updatedData); // 부모 컴포넌트로 상태 변경 전달
    } catch (error) {
      console.error(`Failed to delete menu "${menuName}":`, error);
    }
  };

  return (
    <button
      onClick={() => {
        console.log(idx);
        if (data) {
          data.splice(idx, 1);
          console.log(data, '22');
        }
      }}
    >
      🗑️
    </button>
  );
}

'use client';

import { deleteMenu, Menu } from '@/service/menu';
import React from 'react';

interface IProps {
  idx: number;
  selectedMenuNm: string;
}

export default function DeleteBtn({ idx, selectedMenuNm }: IProps) {
  return (
    <button
      onClick={() => {
        deleteMenu(selectedMenuNm);
      }}
    >
      🗑️
    </button>
  );
}

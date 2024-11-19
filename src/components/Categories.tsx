import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <div className='flex justify-between p-[10px] mb-[10px] border-b-4'>
      <h2>Category</h2>
      <ul className='flex gap-[10px]'>
        {categories.map((category) => (
          <li
            key={category}
            className='pr-[5px] border-r-2'
            onClick={() => {
              onClick(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <div className='flex justify-end py-[10px] pr-[15px] mb-[10px] border-b-4'>
      <ul className='flex gap-[10px]'>
        {categories.map((category) => (
          <li
            key={category}
            className='pr-[5px]'
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

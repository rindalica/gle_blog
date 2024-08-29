import { Post } from '@/service/posts';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { bgColor } from '@/service/postBgColor';

type Props = { post: Post };

export default function PostCard({
  post: { title, description, date, category, path, featured, image },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='w-full h-[300px] rounded-lg overflow-hidden shadow-lg'>
        <div
          className={`flex items-center justify-center h-[200px] ${bgColor(
            category
          )}`}
        >
          <div>{category}</div>
          {/* <Image
            className='w-full'
            src={`/images/posts/${image}`}
            alt={title}
            width={300}
            height={200}
          /> */}
        </div>

        <div className='flex flex-col items-center p-4'>
          {/* <time className='self-end'>{date.toString()}</time> */}
          <h3 className='w-full truncate text-center text-lg font-bold'>
            {title}
          </h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}

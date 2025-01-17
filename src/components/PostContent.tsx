import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from './FilterablePosts';

export default function PostContent({ postData }: { postData: PostData }) {
  console.log('ㅂㅂㅂ', postData);

  const { title, description, content } = postData;
  return (
    <section className='flex flex-col p-4'>
      <div className='flex items-center self-end text-sky-600'>
        <CiCalendar />
        {/* <p>{date.toString()}</p> */}
      </div>

      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-xl font-bold'>{description}</p>
      <MarkdownViewer content={content} />
    </section>
  );
}

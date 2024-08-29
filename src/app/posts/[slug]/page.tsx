import { getPostData } from '@/service/posts';
import React from 'react';
import Image from 'next/image';
import PostContent from '@/components/PostContent';
import { bgColor } from '@/service/postBgColor';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const postData = await getPostData(slug);

  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg'>
      {/* <Image
        className='w-full h-1/5 max-h-[500px]'
        src={`/images/posts/${postData.image}`}
        alt={postData.title}
        width={760}
        height={420}
      /> */}
      <div
        className={`flex items-center justify-center h-[420px] ${bgColor(
          postData.category
        )}`}
      >
        <div>{postData.category}</div>
      </div>
      <PostContent postData={postData} />
    </article>
  );
}

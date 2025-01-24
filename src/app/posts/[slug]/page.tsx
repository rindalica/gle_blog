'use client';

import React, { useState, useEffect } from 'react';
import PostContent from '@/components/PostContent';
import { bgColor } from '@/service/postBgColor';
import { client } from '@/service/sanity';
import { PostData } from '@/components/FilterablePosts';

type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params: { slug } }: Props) {
  const [selected, setSelected] = useState<PostData>({
    _id: '',
    title: '',
    description: '',
    category: '',
    path: '',
    content: '',
  });

  const fetchPosts = async () => {
    const query = `*[_type == "post"] | order(_createdAt desc)`; //업데이트 순으로 정렬 (최신이 먼저오도록))
    const data = await client.fetch(query);
    const selectedData = data.find(
      (post: PostData) => post.path === slug
    ) as PostData;
    setSelected(selectedData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
        className='flex items-center justify-center h-[420px]'
        style={{ background: bgColor(selected?.category || '') }}
      >
        <div className='text-2xl'>{selected?.category}</div>
      </div>
      <PostContent postData={selected} />
    </article>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';
import { client } from '@/service/sanity';
import Loading from '@/app/loading';

const ALL_POSTS = 'All Posts';

export type PostData = {
  _id?: string;
  title: string;
  description: string;
  category: string;
  path: string;
  content: string;
};

export default function FilterablePosts() {
  const [postData, setPostData] = useState<PostData[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [selected, setSelected] = useState(ALL_POSTS);

  const fetchPosts = async () => {
    const query = `*[_type == "post"] | order(_createdAt desc)`; //업데이트 순으로 정렬 (최신이 먼저오도록))
    const data = await client.fetch(query);

    setPostData(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const categoryData = [...new Set(postData.map((post) => post.category))];
    setCategory(categoryData);
  }, [postData]);

  const filtered =
    selected === ALL_POSTS
      ? postData
      : postData.filter((post) => post.category === selected);
  return (
    <div className='w-full h-full overflow-auto'>
      {postData.length !== 0 && (
        <Categories
          categories={[ALL_POSTS, ...category]}
          selected={selected}
          onClick={setSelected}
        />
      )}
      <PostsGrid posts={filtered} />
    </div>
  );
}

import { PostData } from './FilterablePosts';
import React from 'react';
import PostCard from './PostCard';

type Props = { posts: PostData[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full gap-[20px] mx-[20px]'>
      {posts.map((post) => (
        <li key={post._id} className='w-[100%]'>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

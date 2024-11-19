import React from 'react';
import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import CarouselPosts from '@/components/CarouselPosts';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center h-full'>
      <Hero />
      {/* <FeaturedPosts />
      <CarouselPosts /> */}
    </div>
  );
}

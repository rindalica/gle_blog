import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='sticky top-0 flex justify-between items-center w-full px-[20px] py-[10px] bg-[#666666] text-white font-bold'>
      <Link href='/'>
        <h1 className='text-[28px]'>rindalica&apos;s blog</h1>
      </Link>
      <nav className='flex gap-[10px]'>
        <Link href='/'>HOME</Link>
        <Link href='/about'>ABOUT</Link>
        <Link href='/posts'>POSTS</Link>
        <Link href='/contact'>CONTACT</Link>
      </nav>
    </header>
  );
}

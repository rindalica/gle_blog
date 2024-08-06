import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-[10px] bg-pink-50'>
      <Link href='/'>
        <h1 className='text-[30px]'>GLE BLOG</h1>
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

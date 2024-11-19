'use client';

import React from 'react';
import Image from 'next/image';
import profileImage from '../../public/images/profile.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <Image
        src={profileImage}
        alt='Profile Image'
        className='rounded-full w-full my-[20px] border border-black'
        width={320}
        height={320}
      ></Image>
      <h1 className='text-[36px] font-bold leading-[42px] text-center tracking-tighter'>
        안녕하세요.
        <br />
        성실함의 힘을 믿는 개발자
        <br />
        정지민입니다.
      </h1>
      <h2 className='mt-[10px] text-[16px] font-bold text-center leading-[20px] text-[#666]'>
        프론트엔드 개발자
        <br />웹 디자이너
      </h2>
    </div>
  );
}

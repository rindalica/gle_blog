import type { Metadata } from 'next';
import { Open_Sans, Courier_Prime } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });
const courier = Courier_Prime({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: `rindalica's blog. 🙂`,
  description: '린다리카의 블로그입니다. 🙂',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={courier.className}>
      <body className='relative flex flex-col items-center w-full h-[100vh]'>
        <Header />
        <main className='px-[20px] bg-white'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

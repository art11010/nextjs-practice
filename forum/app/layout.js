import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import LoginBtn from './LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  // server component 로그인 된 유저 정보 출력
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="py-4 px-10 flex justify-between gap-5 w-full">
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/main">Main</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/list">List</Link>
            <Link href="/write">Write</Link>
            <LoginBtn />
          </div>
        </nav>
        <main className="px-10">{children}</main>
      </body>
    </html>
  );
}

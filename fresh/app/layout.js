import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="py-4 px-10 flex justify-between gap-5 w-full">
          <Link href="/">Home</Link>
          <div className="flex gap-4">
            <Link href="/list">List</Link>
            <Link href="/list/item">Item</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

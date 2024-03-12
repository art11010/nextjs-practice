'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="my-4 flex justify-center gap-4">
      <Link className={`${pathname === '/' ? 'underline' : ''}`} href="/">
        메인
      </Link>
      <Link
        href="/page1"
        className={`${pathname === '/page1' ? 'underline' : ''}`}
      >
        인사말
      </Link>
      <Link
        href="/page2"
        className={`${pathname === '/page2' ? 'underline' : ''}`}
      >
        행사 개요
      </Link>
      <Link
        href="/page3"
        className={`${pathname === '/page3' ? 'underline' : ''}`}
      >
        행사장 안내
      </Link>
      <Link
        href="/page4"
        className={`${pathname === '/page4' ? 'underline' : ''}`}
      >
        역대 AI SEOUL
      </Link>
      <Link
        href="/page5"
        className={`${pathname === '/page5' ? 'underline' : ''}`}
      >
        참여 이벤트
      </Link>
      <Link
        href="/page6"
        className={`${pathname === '/page6' ? 'underline' : ''}`}
      >
        연사 소개
      </Link>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';

export default function DetailLink({ href, children }) {
  const router = useRouter();

  return <button onClick={() => router.push(href)}>{children}</button>;
}

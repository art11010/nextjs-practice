'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function LoginBtn({ session }) {
  return (
    <>
      {!session ? (
        <>
          <Link href="/register">Signup</Link>
          <button onClick={() => signIn()}>Login</button>
        </>
      ) : (
        <button onClick={() => signOut()}>Logout</button>
      )}
    </>
  );
}

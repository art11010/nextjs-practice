'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function LoginBtn({ session }) {
  return (
    <>
      {!session ? (
        <>
          <button onClick={() => signIn()}>Login</button>
          <Link href="/register">Signup</Link>
        </>
      ) : (
        <button onClick={() => signOut()}>Logout</button>
      )}
    </>
  );
}

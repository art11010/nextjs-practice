'use client';

import { signIn, signOut } from 'next-auth/react';

export default function LoginBtn({ session }) {
  return (
    <>
      {!session ? (
        <button onClick={() => signIn()}>Login</button>
      ) : (
        <button onClick={() => signOut()}>Logout</button>
      )}
    </>
  );
}

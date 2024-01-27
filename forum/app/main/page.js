// useSession() 현재 로그인한 유저 정보가 남기 때문에 변수에 담아놓고 사용한다
// 하지만 보통 server component에서 유저정보 가져와서 client component로 전송해주는게 나을 수 있다
// 왜냐면 useSession 함수는 html 다 보여주고 나서 한 박자 늦게 실행될 수도 있기 때문

'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Main() {
  // client component 로그인 된 유저 정보 출력
  const session = useSession();
  if (session) {
    console.log(session);
  }

  return (
    <div className="flex flex-col gap-7 py-10 w-full items-center">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}

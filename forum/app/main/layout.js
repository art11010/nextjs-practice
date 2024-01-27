// page.js 옆에 layout.js <SessionProvider>로 감싸놓으면
// 그 내부에 들어가는 client component 컴포넌트들은 useSession()을 이용해 로그인 된 유저 정보를 출력해 볼 수 있다

'use client';

import { SessionProvider } from 'next-auth/react';

export default function MainLayout({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

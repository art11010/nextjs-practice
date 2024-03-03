import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-5 py-10 w-full items-center">
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
      </main>
    </>
  );
}

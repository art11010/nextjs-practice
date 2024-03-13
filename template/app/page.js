export default function Home() {
  return (
    <>
      <header className="flex justify-between p-4 h-14">
        <img className="h-full" src="/main/header_1.png" alt="logo 1" />
        <img className="h-full" src="/main/header_2.png" alt="logo 2" />
      </header>
      <main className="px-6">
        <section>
          <h1 className="mt-10 text-center text-8xl text-transparent bg-gradient-to-r from-white to-neutral-700 bg-clip-text font-['KBIZHanmaumMyungjo']">
            AI
            <br />
            SEOUL
          </h1>
          <p className="mt-8 text-center text-sm leading-6">
            2024.02.01 [목] 10:00 - 18:00 <br />
            서울시청 8층 다목적홀, 간담회장
          </p>
          <div className="mt-28 flex justify-center gap-5 h-5">
            <img src="/main/logo_1.png" alt="logo 1" />
            <img src="/main/logo_2.png" alt="logo 2" />
          </div>
        </section>

        <hr className="mt-8 mb-5 border-t border-neutral-600" />

        <section>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="#"
              className="flex flex-col justify-between gap-5 p-4 text-left text-sm bg-gradient-to-br from-neutral-800 from-10% to-neutral-600 rounded-xl shadow-md"
            >
              인사말
              <div className="w-full h-7 bg-[url('/main/button_1.png')] bg-contain bg-right bg-no-repeat"></div>
            </a>
            <a
              href="#"
              className="flex flex-col justify-between gap-5 p-4 text-left text-sm bg-gradient-to-br from-neutral-800 from-10% to-neutral-600 rounded-xl shadow-md"
            >
              행사 개요
              <div className="w-full h-7 bg-[url('/main/button_2.png')] bg-contain bg-right bg-no-repeat"></div>
            </a>
            <a
              href="#"
              className="flex flex-col justify-between gap-5 p-4 text-left text-sm bg-gradient-to-br from-neutral-800 from-10% to-neutral-600 rounded-xl shadow-md"
            >
              행사장 안내
              <div className="w-full h-7 bg-[url('/main/button_3.png')] bg-contain bg-right bg-no-repeat"></div>
            </a>
            <a
              href="#"
              className="flex flex-col justify-between gap-5 p-4 text-left text-sm bg-gradient-to-br from-neutral-800 from-10% to-neutral-600 rounded-xl shadow-md"
            >
              역대 AI SEOUL
              <div className="w-full h-7 bg-[url('/main/button_4.png')] bg-contain bg-right bg-no-repeat"></div>
            </a>
            <a
              href="#"
              className="flex flex-col justify-between gap-5 p-4 text-left text-sm bg-gradient-to-br from-neutral-800 from-10% to-neutral-600 rounded-xl shadow-md"
            >
              참여 이벤트
              <div className="w-full h-7 bg-[url('/main/button_5.png')] bg-contain bg-right bg-no-repeat"></div>
            </a>
            <a
              href="#"
              className="flex flex-col justify-between gap-5 p-4 text-left text-sm bg-gradient-to-br from-neutral-800 from-10% to-neutral-600 rounded-xl shadow-md"
            >
              연사 소개
              <div className="w-full h-7 bg-[url('/main/button_6.png')] bg-contain bg-right bg-no-repeat"></div>
            </a>
          </div>
        </section>

        <section>
          <h2 className="mt-5 text-center text-2xl">Program Book</h2>
          <div className="mt-5 flex flex-col gap-2">
            <button
              type="button"
              className="py-4 flex justify-center items-center gap-3 w-full text-sm text-black bg-neutral-200 rounded-full"
            >
              AI SEOUL 2024 프로그램북
              <div className="w-5 h-5 bg-[url('/ico_download.png')] bg-cover bg-center"></div>
            </button>
            <button
              type="button"
              className="py-4 flex justify-center items-center gap-3 w-full text-sm text-black bg-neutral-200 rounded-full"
            >
              AI SEOUL 2024 프로그램북
              <div className="w-5 h-5 bg-[url('/ico_download.png')] bg-cover bg-center"></div>
            </button>
            <button
              type="button"
              className="py-4 flex justify-center items-center gap-3 w-full text-sm text-black bg-neutral-200 rounded-full"
            >
              AI SEOUL 2024 프로그램북
              <div className="w-5 h-5 bg-[url('/ico_download.png')] bg-cover bg-center"></div>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

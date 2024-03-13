export default function Page4() {
  return (
    <>
      <header className="py-10 text-center text-3xl font-bold bg-[url('/title_bg.png')] bg-cover bg-center">
        역대 AI
      </header>
      <main className="px-6">
        <hr className="border-t border-neutral-600" />

        <section className="pt-5">
          <div>
            <h3
              className="
              flex flex-col items-center text-xl leading-5
              relative
              before:content-['•']
              after:content-['2022']
              after:font-bold
              after:text-7xl
              after:text-white/5
              after:absolute
              after:-top-1
            "
            >
              2022
              <div className="mt-2 text-center text-[10px]">
                <strong className="text-xs">
                  AI SEOUL 2022, AI로 그려보는 서울의 미래
                </strong>
                <br />
                2022.11.03 - 11.04 I 양재 aT Center
              </div>
            </h3>
            <div className="flex flex-col items-center mt-4 pb-5">
              <img className="w-40" src="/page4/poster_1.png" alt="poster 1" />
              <h5 className="my-3">· 주요 연사 ·</h5>
              <p className="text-center text-sm">
                윤종영 <br />
                AI 양재허브 센터장 <br />
                - <br />
                벤자민 프루돔므 <br />
                밀라 연구소 이사장 <br />
                - <br />
                정 송 <br />
                카이스트 김재철 AI 대학원 원장 <br />
              </p>
            </div>
            <button
              type="button"
              className="py-4 flex justify-center items-center gap-3 w-full text-sm text-black bg-neutral-200 rounded-full"
            >
              행사 들여다보기
              <div className="w-5 h-5 bg-[url('/ico_download.png')] bg-cover bg-center"></div>
            </button>
          </div>
          <div className="mt-8">
            <h3
              className="
              flex flex-col items-center text-xl leading-5
              relative
              before:content-['•']
              after:content-['2021']
              after:font-bold
              after:text-7xl
              after:text-white/5
              after:absolute
              after:-top-1
            "
            >
              2021
              <div className="mt-2 text-center text-[10px]">
                <strong className="text-xs">2021 AI Concert</strong>
                <br />
                2021.12.15 I Setec 1층 컨벤션홀
              </div>
            </h3>
            <div className="flex flex-col items-center mt-4 pb-5">
              <img className="w-40" src="/page4/poster_2.png" alt="poster 2" />
              <h5 className="my-3">· 주요 연사 ·</h5>
              <p className="text-center text-sm">
                윤종영 <br />
                AI 양재허브 센터장 <br />
                - <br />
                벤자민 프루돔므 <br />
                밀라 연구소 이사장 <br />
                - <br />
                정 송 <br />
                카이스트 김재철 AI 대학원 원장 <br />
              </p>
            </div>
            <button
              type="button"
              className="py-4 flex justify-center items-center gap-3 w-full text-sm text-black bg-neutral-200 rounded-full"
            >
              행사 들여다보기
              <div className="w-5 h-5 bg-[url('/ico_download.png')] bg-cover bg-center"></div>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

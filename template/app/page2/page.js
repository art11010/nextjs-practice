export default function Page2() {
  return (
    <>
      <header className="py-10 text-center text-3xl font-bold bg-[url('/title_bg.png')] bg-cover bg-center">
        행사 개요
      </header>
      <main className="px-6">
        <hr className="mb-5 border-t border-neutral-600" />

        <section>
          <h2 className="py-4 px-2 text-center font-bold bg-gradient-to-br from-neutral-800 from-50% to-neutral-700 rounded-xl shadow-md">
            AI SEOUL 2024
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-1 p-2 bg-neutral-700 rounded-xl ">
            <div className="flex flex-col gap-3 pt-2 pb-3 px-2 text-center text-xs bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-xl shadow-md">
              <span>기간</span>
              <strong>2024.02.01 (목)</strong>
            </div>
            <div className="flex flex-col gap-3 pt-2 pb-3 px-2 text-center text-xs bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-xl shadow-md">
              <span>장소</span>
              <strong>
                서울시청 <br /> 다목적홀, 간담회장, 로비
              </strong>
            </div>
            <div className="col-span-2 flex flex-col gap-3 pt-2 pb-3 px-2 text-center text-xs bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-xl shadow-md">
              <span>주최 / 주관</span>
              <strong>서울특별시 / 서울 AI 허브</strong>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-1 p-2 bg-neutral-700 rounded-xl ">
            <div className="flex flex-col gap-3 pt-2 pb-3 px-2 text-center text-xs bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-xl shadow-md">
              <span>참가 대상</span>
              <strong className="leading-6">
                VC 서울시 및 지자체 관계자 <br />
                인공지능 및 스타트업 관련 전문가 <br />
                글로벌 기업 및 AI 관련 연구/유관 기관 <br />
                허브 소속기업 및 협력기관 등 400명 내외 <br />
                AI기술, AI산업에 관심있는 분 누구나 <br />
                사전신청 후 참석 가능 (참가비 무료)
              </strong>
            </div>
            <div className="flex flex-col gap-3 pt-2 pb-3 px-2 text-center text-xs bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-xl shadow-md">
              <span>주요 프로그램</span>
              <strong>컨퍼런스·패널토크·포스트세션·기업홍보부스</strong>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function Page6() {
  return (
    <>
      <header className="py-10 text-center text-3xl font-bold bg-[url('/title_bg.png')] bg-cover bg-center">
        연사 소개
      </header>
      <main className="px-6">
        <hr className="border-t border-neutral-600" />

        <section className="mt-5">
          <h5 className="text-center font-bold">· 개회사, 환영사, 축사 ·</h5>
          <div className="grid grid-cols-10 items-center gap-2 mt-5 p-3 text-black bg-white rounded-md">
            <img
              className=" col-span-4"
              src="/page6/profile_1.png"
              alt="profile 1"
            />
            <dl className="col-span-6 flex flex-col gap-2">
              <div>
                <dt className="text-sm">조인성 I Zo Insung</dt>
                <dd className="text-[10px]">
                  대한민국 배우 I Actor I 아이오케이컴퍼니
                </dd>
              </div>
              <div>
                <dt className="text-sm">데뷔</dt>
                <dd className="text-[10px]">1998년 지오지아 모델</dd>
              </div>
              <div>
                <dt className="text-sm">수상 경력</dt>
                <dd className="text-[10px]">
                  2021년 제30회 부일영화상 남자 올해의스타상 (모가디슈) <br />
                  2015년 미국 드라마피버어워즈 베스트 배우상
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </>
  );
}

export default function Page5() {
  return (
    <>
      <header className="py-10 text-center text-3xl font-bold bg-[url('/title_bg.png')] bg-cover bg-center">
        참여 이벤트
      </header>
      <main className="px-6">
        <hr className="border-t border-neutral-600" />

        <section className="mt-6">
          <h3 className="text-center font-bold">AI SEOUL 2024 참가자 이벤트</h3>
          <p className="mt-4 text-center text-xs">
            모든 행사 프로그램 진행 후, 17:30부터 진행되는 렙업세션 및
            폐회식에서 마지막까지 함께 해주신 참가자분들을 위해 럭키드로우가
            진행됩니다.
            <br />
            <br />
            푸짐한 상품이 준비되어 있으니, 참가자분들께서는 행사 당일 마지막까지
            많은 참여 부탁드립니다.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-1 p-2 bg-neutral-700 rounded-xl ">
            <div className="flex flex-col gap-3 pt-2 pb-3 px-2 text-center text-xs bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-xl shadow-md">
              <strong>참여 방법</strong>
              <span>
                현장 행사장 입장 시, <br /> 명함, 럭키드로우 응모권 제출
              </span>
            </div>
            <div className="flex flex-col gap-3 pt-2 pb-3 px-2 text-center text-xs bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-xl shadow-md">
              <strong>추첨 방법</strong>
              <span>
                모든 세션이 끝나고, <br />
                렙업세션 시간에 현장에서 <br />
                응모권 추첨, 현장에서 상품 증정
              </span>
            </div>
          </div>
        </section>
        <section className="mt-6">
          <h3 className="text-center font-bold">경품 목록</h3>
          <table className="mt-4 w-full">
            <colgroup>
              <col width="25%" />
              <col width="50%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th className="py-2 text-xs text-black bg-neutral-200 rounded-tl-md">
                  추첨인원
                </th>
                <th className="py-2 text-xs text-black bg-neutral-200">
                  경품명
                </th>
                <th className="py-2 text-xs text-black bg-neutral-200 rounded-tr-md">
                  경품사진
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-b border-neutral-600">
                <td className="p-2 text-xs" height="100%">
                  1명
                </td>
                <td className="p-2 text-xs">
                  갤럭시 워치 6 클래식 <br />
                  43mm 블루투스
                </td>
                <td className="p-2 text-xs">
                  <img
                    className="inline w-14"
                    src="/page5/gift_1.png"
                    alt="gift 1"
                  />
                </td>
              </tr>
              <tr className="text-center border-b border-neutral-600">
                <td className="p-2 text-xs" height="100%">
                  1명
                </td>
                <td className="p-2 text-xs">
                  소니 <br />
                  노이즈캔슬링 헤드폰 <br />
                  WH-CH720N
                </td>
                <td className="p-2 text-xs">
                  <img
                    className="inline w-14"
                    src="/page5/gift_2.png"
                    alt="gift 2"
                  />
                </td>
              </tr>
              <tr className="text-center border-b border-neutral-600">
                <td className="p-2 text-xs" height="100%">
                  1명
                </td>
                <td className="p-2 text-xs">
                  LG전자 퓨리케어 <br />
                  공기청정기 알파 <br />
                  <span className="text-[10px]">인공지능센서 PSHNACO1</span>
                </td>
                <td className="p-2 text-xs">
                  <img
                    className="inline w-14"
                    src="/page5/gift_3.png"
                    alt="gift 3"
                  />
                </td>
              </tr>
              <tr className="text-center border-b border-neutral-600">
                <td className="p-2 text-xs" height="100%">
                  2명
                </td>
                <td className="p-2 text-xs">
                  구글 네스트 <br />
                  미니 인공지능 <br />
                  AI 블루투스 스피커
                </td>
                <td className="p-2 text-xs">
                  <img
                    className="inline w-14"
                    src="/page5/gift_4.png"
                    alt="gift 4"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

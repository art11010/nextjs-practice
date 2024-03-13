export default function Page3() {
  return (
    <>
      <header className="py-10 text-center text-3xl font-bold bg-[url('/title_bg.png')] bg-cover bg-center">
        행사장 안내
      </header>
      <main className="px-6">
        <hr className="border-t border-neutral-600" />

        <section className="py-5">
          <h3 className="text-center">
            <img className="mx-auto w-4" src="/page3/ico_pin.png" alt="pin" />
            <strong className="block mt-2 text-sm">
              <span className="text-xs font-normal">행사장 위치</span>
              <br />
              서울특별시 중구 세종대로 110 서울시청 8층 다목적홀
            </strong>
          </h3>
          <img className="mt-4 rounded-lg" src="/page3/map_1.jpg" alt="map 1" />
        </section>
        <section>
          <h5
            className="
              block text-center text-xs relative
              before:content-[''] before:block before:h-[1px] before:w-1/3 before:bg-neutral-600 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0
              after:content-[''] after:block after:h-[1px] after:w-1/3 after:bg-neutral-600 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0
            "
          >
            찾아오시는 길
          </h5>

          <div>
            <h4 className="mt-3 flex justify-center items-center gap-2 text-sm">
              <img className="w-5" src="/page3/ico_subway.png" alt="subway" />
              지하철 정보
            </h4>
            <div className="mt-4 flex justify-center gap-4">
              <div className="flex flex-col gap-2 items-center text-sm">
                <span className="flex justify-center items-center w-4 h-4 text-center text-xs bg-blue-800 rounded-full">
                  1
                </span>
                1호선 시청역 5번 출구
              </div>
              <div className="flex flex-col gap-2 items-center text-sm">
                <span className="flex justify-center items-center w-4 h-4 text-center text-xs bg-green-500 rounded-full">
                  2
                </span>
                2호선 시청역 5번 출구
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="mt-3 flex justify-center items-center gap-2 text-sm">
              <img className="w-5" src="/page3/ico_bus.png" alt="bus" />
              버스 정보
            </h4>
            <img
              className="mt-4 rounded-lg"
              src="/page3/map_2.jpg"
              alt="map 2"
            />
          </div>

          <table className="mt-5 w-full">
            <colgroup>
              <col width="50%" />
              <col width="50%" />
            </colgroup>
            <thead>
              <tr>
                <th className="py-2 text-xs text-black bg-neutral-200 rounded-tl-md">
                  정류장명
                </th>
                <th className="py-2 text-xs text-black bg-neutral-200 rounded-tr-md">
                  버스 번호
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-600">
                <td className="py-3 pl-2 text-xs" height="100%">
                  <div className="flex gap-2">
                    <span className="shrink-0 flex justify-center items-center w-4 h-4 text-center text-[10px] text-black bg-white rounded-full">
                      1
                    </span>
                    시청, 서울신문사(02706)
                  </div>
                </td>
                <td className="py-3 pl-2 text-xs">(공항) 6005</td>
              </tr>
              <tr className="border-b border-neutral-600">
                <td className="py-3 pl-2 text-xs" height="100%">
                  <div className="flex gap-2">
                    <span className="shrink-0 flex justify-center items-center w-4 h-4 text-center text-[10px] text-black bg-white rounded-full">
                      2
                    </span>
                    프레스센터(02507)
                  </div>
                </td>
                <td className="py-3 pl-2 text-xs">
                  (공항) 6701 <br />
                  (마을) 종로09, 종로11 <br />
                  (간선) 402, N75(심야) <br />
                  (경기) 799파주
                </td>
              </tr>
              <tr className="border-b border-neutral-600">
                <td className="py-3 pl-2 text-xs" height="100%">
                  <div className="flex gap-2">
                    <span className="shrink-0 flex justify-center items-center w-4 h-4 text-center text-[10px] text-black bg-white rounded-full">
                      3
                    </span>
                    시청앞, 덕수궁(02286)
                  </div>
                </td>
                <td className="py-3 pl-2 text-xs">
                  (간선) 401, 402, 406, <br />
                  N16(심야), N51(심야), N75(심야) <br />
                  (지선) 1711, 7016, 7022 <br />
                  (경기) 790파주, 799파주
                </td>
              </tr>
              <tr className="border-b border-neutral-600">
                <td className="py-3 pl-2 text-xs" height="100%">
                  <div className="flex gap-2">
                    <span className="shrink-0 flex justify-center items-center w-4 h-4 text-center text-[10px] text-black bg-white rounded-full">
                      4
                    </span>
                    시청광장(02641)
                  </div>
                </td>
                <td className="py-3 pl-2 text-xs">
                  (경기) 790파주, 799파주 <br />
                  (간선) 172, 405, 472, N62(심야), N73(심야)
                </td>
              </tr>
              <tr className="border-b border-neutral-600">
                <td className="py-3 pl-2 text-xs" height="100%">
                  <div className="flex gap-2">
                    <span className="shrink-0 flex justify-center items-center w-4 h-4 text-center text-[10px] text-black bg-white rounded-full">
                      5
                    </span>
                    시청역(02503)
                  </div>
                </td>
                <td className="py-3 pl-2 text-xs">(마을) 종로09, 종로11</td>
              </tr>
              <tr className="border-b border-neutral-600">
                <td className="py-3 pl-2 text-xs" height="100%">
                  <div className="flex gap-2">
                    <span className="shrink-0 flex justify-center items-center w-4 h-4 text-center text-[10px] text-black bg-white rounded-full">
                      6
                    </span>
                    시청덕수궁(02639)
                  </div>
                </td>
                <td className="py-3 pl-2 text-xs">(공항) 6005</td>
              </tr>
              <tr className="border-b border-neutral-600">
                <td className="py-3 pl-2 text-xs" height="100%">
                  <div className="flex gap-2">
                    <span className="shrink-0 flex justify-center items-center w-4 h-4 text-center text-[10px] text-black bg-white rounded-full">
                      7
                    </span>
                    롯데호텔(02639)
                  </div>
                </td>
                <td className="py-3 pl-2 text-xs">(공항) 6701, N6701(심야)</td>
              </tr>
              <tr className="border-b border-neutral-600">
                <td className="py-3 pl-2 text-xs" height="100%">
                  <div className="flex gap-2">
                    <span className="shrink-0 flex justify-center items-center w-4 h-4 text-center text-[10px] text-black bg-white rounded-full">
                      8
                    </span>
                    서울프라자호텔(02699)
                  </div>
                </td>
                <td className="py-3 pl-2 text-xs">(공항) 6701</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

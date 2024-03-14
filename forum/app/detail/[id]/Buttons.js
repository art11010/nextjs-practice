'use client';

import Link from 'next/link';

export default function Buttons({ id }) {
  return (
    <div className="flex justify-end gap-4">
      {/* <button
        onClick={() => {
          fetch('/api/test?name=lee&age=20');
          // fetch('/api/test/lee');
        }}
      >
        데이터 전송
      </button> */}
      <button
        className="text-sm text-gray-500"
        onClick={async () => {
          try {
            const res = await fetch('/api/post/delete', {
              method: 'DELETE',
              body: JSON.stringify({ id }),
            });

            if (res.status === 200) {
              // 성공 시 실행 코드
              const data = await res.json();
            } else if (res.status === 401) {
              // 서버에서 에러코드 전송 시 실행 코드
              const data = await res.json();
              throw new Error(data.message);
            }
          } catch (error) {
            // 네트워크 문제로 실패 시 실행 코드
            alert(error.message);
          }
        }}
      >
        삭제
      </button>
      <Link href={`/edit/${id}`} className="text-sm text-gray-500">
        수정
      </Link>
      <Link href="/list" className="text-sm text-gray-500">
        목록
      </Link>
    </div>
  );
}

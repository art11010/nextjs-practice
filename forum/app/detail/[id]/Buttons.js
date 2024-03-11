'use client';

import Link from 'next/link';

export default function Buttons({ id }) {
  return (
    <div className="flex justify-end gap-4">
      <button
        onClick={() => {
          // fetch('/api/test?name=lee&age=20');
          fetch('/api/test/lee');
        }}
      >
        데이터 전송
      </button>
      {/* <button
        className="text-sm text-gray-500"
        onClick={() => {
          fetch('/api/post/delete', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
          })
            .then((res) => {
              if (res.status === 200) {
                return res.json();
              } else {
                // 서버에서 에러코드 전송 시 실행 코드
              }
            })
            .then(() => {
              // 성공 시 실행 코드
            })
            .catch((error) => {
              // 네트워크 문제로 실패 시 실행 코드
              console.error(error);
            });
        }}
      >
        삭제
      </button> */}
      <Link href={`/edit/${id}`} className="text-sm text-gray-500">
        수정
      </Link>
      <Link href="/list" className="text-sm text-gray-500">
        목록
      </Link>
    </div>
  );
}

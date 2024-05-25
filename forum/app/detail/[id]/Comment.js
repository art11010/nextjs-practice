'use client';

import { useEffect, useState } from 'react';

export default function Comment({ id }) {
  const [comment, setComment] = useState('');

  return (
    <div className="px-4">
      <div>
        <h6>댓글</h6>
      </div>
      <div className="mt-4 flex gap-4">
        <input
          type="text"
          className="p-2 border rounded-md"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button
          onClick={() => {
            fetch('/api/comment/create', {
              method: 'POST',
              body: JSON.stringify({
                postId: id,
                comment,
              }),
            });
          }}
        >
          작성
        </button>
      </div>
    </div>
  );
}

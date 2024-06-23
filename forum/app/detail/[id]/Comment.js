'use client';

import { useEffect, useState } from 'react';

export default function Comment({ id }) {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch(`/api/comment/list?_id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data);
      });
  }, [id]);

  return (
    <div className="px-4">
      <h6>댓글</h6>
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
              body: JSON.stringify({ _id: id, comment }),
            });
          }}
        >
          작성
        </button>
      </div>
      <div className="mt-4 py-4 space-y-4 border-t">
        {commentList.map((item) => (
          <p key={item?._id} className="text-sm">
            {item?.comment}
            <span className="mt-0.5 block text-xs text-gray-400">
              written by {item?.author}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

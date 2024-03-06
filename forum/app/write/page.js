'use client';

import { useState } from 'react';

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <h4>글 작성</h4>
      <form action="/api/post/new" method="POST">
        <div className="flex flex-col items-start gap-4 mt-4 pt-4 border-t border-gray-300">
          <input
            type="text"
            name="title"
            className="text-black"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name="content"
            className="text-black"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}

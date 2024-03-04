'use client';

import { useState } from 'react';

export default function List() {
  const [count, setCount] = useState([0, 0, 0]);
  const 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div className="py-10">
      <h1 className="text-center">상품 목록</h1>
      <ul className="mt-4 flex flex-col gap-4 items-center">
        {상품.map((item, index) => (
          <li
            key={item}
            className="p-4 w-40 text-center text-black bg-lime-200 rounded-md"
          >
            {item}
            <img src={`/food${index}.png`} alt="" />
            <div className="flex justify-center gap-2">
              <button
                className="px-1 bg-lime-800 rounded-md text-white"
                onClick={() =>
                  setCount((prev) => {
                    const copy = [...prev];
                    copy[index]--;
                    return copy;
                  })
                }
              >
                -
              </button>
              <span>{count[index]}</span>
              <button
                className="px-1 bg-lime-800 rounded-md text-white"
                onClick={() =>
                  setCount((prev) => {
                    const copy = [...prev];
                    copy[index]++;
                    return copy;
                  })
                }
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

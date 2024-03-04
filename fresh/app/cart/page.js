import React from 'react';

export default function Cart() {
  return (
    <div>
      <h4 className="text-center">Cart</h4>
      <ul>
        <li className="flex justify-center gap-5 py-4 border-b border-white">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </li>
        <li className="flex justify-center gap-5 py-4 border-b border-white">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </li>
      </ul>
    </div>
  );
}

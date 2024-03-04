import { age } from './data.js';

export default function Cart() {
  const 장바구니 = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h4 className="text-center">Cart</h4>
      {장바구니.map((item) => (
        <CartItem 작명={item} />
      ))}
      <Banner card="현대카드" />
      <Banner card="롯데카드" />
    </div>
  );
}

function Banner({ card }) {
  return <p>{card} 무이자 이벤트 중</p>;
}

function CartItem({ 작명 }) {
  return (
    <div className="flex justify-center gap-5 py-4 border-b border-white">
      <p>상품명 {작명}</p>
      <p>$40</p>
      <p>{age}개</p>
    </div>
  );
}

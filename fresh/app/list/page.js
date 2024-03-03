export default function List() {
  return (
    <div className="py-10">
      <h1 className="text-center">상품 목록</h1>
      <ul className="mt-4 flex flex-col gap-4 items-center">
        <li className="p-4 text-black bg-lime-200 rounded-md">상품 1 $40</li>
        <li className="p-4 text-black bg-lime-200 rounded-md">상품 2 $40</li>
      </ul>
    </div>
  );
}

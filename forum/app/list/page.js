import { connectDB } from '@/util/database';

export default async function List() {
  const db = (await connectDB).db('forum');
  const list = await db.collection('post').find().toArray();
  console.log(list);

  return (
    <div className="flex flex-col gap-4">
      {list.map((item) => (
        <div
          key={item._id}
          className="flex flex-col gap-1 p-4 bg-black rounded-lg shadow-lg dark:text-black dark:bg-white"
        >
          <h4>{item.title}</h4>
          <p className="text-sm text-gray-500">{item.content}</p>
        </div>
      ))}
    </div>
  );
}

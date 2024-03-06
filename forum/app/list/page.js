import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './detailLink';

export default async function List() {
  const db = (await connectDB).db('forum');
  const list = await db.collection('post').find().toArray();

  return (
    <div className="flex flex-col gap-4">
      {list.map((item) => (
        <div
          key={item._id}
          className="flex flex-col gap-1 p-4 bg-black rounded-lg shadow-lg dark:text-black dark:bg-white"
        >
          <Link href={`/detail/${item._id}`}>
            <h4>{item.title}</h4>
          </Link>
          <DetailLink href={`/detail/${item._id}`}>
            <p className="text-left text-sm text-gray-500">{item.content}</p>
          </DetailLink>
        </div>
      ))}
    </div>
  );
}

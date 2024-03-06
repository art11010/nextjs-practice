import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Detail(props) {
  const db = (await connectDB).db('forum');
  const item = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });
  // console.log(props);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 p-4 text-center bg-black rounded-lg shadow-lg dark:text-black dark:bg-white">
        <h4 className="font-semibold">상세 페이지</h4>
        <div className="mt-4 pt-4 border-t border-gray-300">
          <h6>{item.title}</h6>
          <p className="text-sm">{item.content}</p>
        </div>
      </div>
    </div>
  );
}

import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Buttons from './buttons';

export default async function Detail(props) {
  const db = (await connectDB).db('forum');
  const item = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 p-4 text-center bg-black rounded-lg shadow-lg dark:text-black dark:bg-white">
        <h4 className="font-semibold">상세 페이지</h4>
        <div className="my-4 py-4 border-y border-gray-300">
          <h6>{item?.title}</h6>
          <p className="text-sm">{item?.content}</p>
        </div>
        <Buttons id={item?._id.toString()} />
      </div>
    </div>
  );
}

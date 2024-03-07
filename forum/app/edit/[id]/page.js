import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  const db = (await connectDB).db('forum');
  const item = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>게시글 수정</h4>
      <form action="/api/post/edit" method="POST">
        <div className="flex flex-col items-start gap-4 mt-4 pt-4 border-t border-gray-300">
          <input type="hidden" name="_id" defaultValue={item?._id} />
          <input
            type="text"
            name="title"
            className="text-black"
            placeholder="title"
            defaultValue={item?.title}
          />
          <textarea
            name="content"
            className="text-black"
            placeholder="content"
            defaultValue={item?.content}
          ></textarea>
        </div>
        <button type="submit" className="mt-2">
          Edit
        </button>
      </form>
    </div>
  );
}

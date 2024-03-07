import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const db = (await connectDB).db('forum');
    const { id } = JSON.parse(req.body);

    try {
      const result = await db
        .collection('post')
        .deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'post not found' });
      } else {
        return res.status(200).json({ message: 'post deleted' });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

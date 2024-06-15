import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const db = (await connectDB).db('forum');

    try {
      await db
        .collection('comment')
        .find({ parent: new ObjectId(req.query._id) })
        .toArray();
      res.status(200).json('저장 완료');
    } catch (error) {
      console.error(error);
    }
  }
}

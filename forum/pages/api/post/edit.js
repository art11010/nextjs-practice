import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('forum');
    const { _id, ...post } = req.body;

    if (!req.body.title || !req.body.content) {
      return res.status(500).json('title or content is empty');
    }

    try {
      await db.collection('post').updateOne(
        { _id: new ObjectId(_id) },
        {
          $set: post,
          $currentDate: { lastModified: true },
        },
      );
      res.redirect(302, `/detail/${req.body._id}`);
    } catch (error) {
      console.error(error);
    }
  }
}

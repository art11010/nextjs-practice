import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  req.body = JSON.parse(req.body);

  if (req.method === 'POST') {
    const db = (await connectDB).db('forum');

    if (!session) {
      return res.status(401).json({ message: 'Please sign in' });
    }
    if (!req.body.comment) {
      return res.status(500).json('comment is empty');
    }

    try {
      await db.collection('comment').insertOne({
        parent: new ObjectId(req.body._id),
        comment: req.body.comment,
        author: session.user.email,
        name: session.user.name,
      });

      const comments = await db
        .collection('comment')
        .find({ parent: new ObjectId(req.body._id) })
        .toArray();
      return res.status(200).json(comments);
    } catch (error) {
      console.error(error);
    }
  }
}

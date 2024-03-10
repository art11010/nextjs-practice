import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  const db = (await connectDB).db('forum');
  const list = await db.collection('post').find().toArray();
  const date = new Date();
  if (req.method == 'GET') {
    console.log(req.query);
    res.status(200).json('test');
    // res.status(200).json(list);
    // res.status(200).json(date);
  }
  if (req.method == 'POST') {
    res.status(200).json({ hi: '바보' });
  }
}

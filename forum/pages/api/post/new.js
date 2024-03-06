import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const db = (await connectDB).db('forum');

    if (!req.body.title || !req.body.content) {
      return res.status(500).json('title or content is empty');
    }

    try {
      db.collection('post').insertOne(req.body);
      res.redirect(302, '/list');
      // res.status(200).json('저장 완료');
    } catch (error) {
      console.error(error);
    }
  }
}

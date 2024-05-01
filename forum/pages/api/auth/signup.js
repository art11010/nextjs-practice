import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('forum');

    if (!req.body.email || !req.body.password) {
      return res.status(500).json('email or password is empty');
    }

    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      await db.collection('user').insertOne(req.body);
      res.redirect(302, '/');
    } catch (error) {
      console.error(error);
    }
  }
}

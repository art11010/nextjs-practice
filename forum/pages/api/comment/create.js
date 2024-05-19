import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { connectDB } from '@/util/database';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  console.log(req.body);
  // if (res.method === 'POST') {
  //   if (session) {
  //     req.body.author = session.user.email;
  //   }

  //   const db = (await connectDB).db('forum');

  //   if (!req.body.comment) {
  //     return res.status(500).json('comment is empty');
  //   }

  //   try {
  //     await db.collection('comment').insertOne(req.body);
  //     res.redirect(302, `/detail/${req.body.postId}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}

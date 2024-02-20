import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  // 서버 기능 내부에서 getServerSession를 사용할 경우 req,res 도 같이 보내줘야 한다

  if (session) {
    req.body.author = session.user.email;
  }

  if (req.method == 'POST') {
    const db = (await connectDB).db('forum');

    if (!req.body.title || !req.body.content) {
      return res.status(500).json('title or content is empty');
    }

    try {
      await db.collection('post').insertOne(req.body);
      res.redirect(302, '/list');
      // res.status(200).json('저장 완료');
    } catch (error) {
      console.error(error);
    }
  }
}

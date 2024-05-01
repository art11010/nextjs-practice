export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('forum');

    if (!req.body.email || !req.body.password) {
      return res.status(500).json('email or password is empty');
    }

    try {
      await db.collection('user').insertOne(req.body);
      res.redirect(302, '/home');
    } catch (error) {
      console.error(error);
    }
  }
}

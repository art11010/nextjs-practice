export default async function handler(req, res) {
  if (req.method == 'GET') {
    // console.log(req.query);
    res.status(200).json('test');
  }
}

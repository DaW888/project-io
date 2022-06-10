import { NextApiRequest, NextApiResponse } from 'next';

export default function sendEmail(req: NextApiRequest, res: NextApiResponse<{ sent: boolean }>) {
  console.log(req.body.name, req.body.email, req.body.toPay);
  setTimeout(() => {
    res.status(200).json({ sent: true });
  }, 2000);
}

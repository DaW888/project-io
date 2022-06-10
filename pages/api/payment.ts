import { NextApiRequest, NextApiResponse } from 'next';

export default function payment(req: NextApiRequest, res: NextApiResponse<{ success: boolean }>) {
  console.log(req.body.name, req.body.email, req.body.cardNumber, req.body.toPay, req.body.ccv);
  setTimeout(() => {
    res.status(200).json({ success: true });
  }, 2000);
}

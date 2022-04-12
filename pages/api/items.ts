import type { NextApiRequest, NextApiResponse } from 'next'
import { config } from '../../config';

const BASE_URL = config.baseUrl;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  switch (req.method) {
    case 'GET':
      res.status(200).json({ name: 'John Doe' })
      break;
    case 'POST':
      break;
    default:
      break;
  }

}

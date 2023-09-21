import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from '@/lib/serverAuth';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    await serverAuth(req);

    const url = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=KuX4IPwrlj7fMalX51ZsLUgAJpSRPcYo'

    return res.status(200).json(url);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}

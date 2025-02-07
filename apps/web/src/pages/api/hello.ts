// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

/**
 * Handles the API request and sends a JSON response with a name.
 *
 * @param _req - The incoming API request object.
 *
 * @param res - The outgoing API response object.
 */
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: 'John Doe' });
}

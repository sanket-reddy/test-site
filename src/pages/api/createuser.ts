import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectDb();
  let username;
}

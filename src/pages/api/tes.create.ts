import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../lib/db";
import { tesParams } from "../../../types";
import Tes from "../../lib/db/Models/tes.model";

export default async function createtes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();
  let username = req.body.username;
  let x = new Tes({ username });
  x.save();
  res.status(200).send("added done");
}

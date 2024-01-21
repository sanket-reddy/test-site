import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

const tesSchema = new Schema({
  username: { type: String, required: true, unique: true },
});

const Tes = models.tes || model("tes", tesSchema);

export default Tes;

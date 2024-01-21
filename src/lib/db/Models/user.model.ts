import mongoose, { models } from "mongoose";

import { Mongoose, Schema, model } from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

const User = models.User || model("User", userSchema);

export default User;

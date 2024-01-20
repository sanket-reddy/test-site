import { Schema, model, models } from "mongoose";

export interface Iuser extends Document {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

const userSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String },
});

const User = models.User || model("User", userSchema);

export default User;

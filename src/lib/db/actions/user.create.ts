import connectDb from "..";
import { CreateUserParams } from "../../../../types";
import User from "../Models/user.model";
export default async function CreateUser(user: CreateUserParams) {
  try {
    await connectDb();
    console.log(user);
    const newUser = new User(user);
    newUser.save();
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

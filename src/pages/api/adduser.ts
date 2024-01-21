import connectDb from "@/lib/db";
import { CreateUserParams } from "../../../types";
import User from "../../lib/db/models/user.model";
export default async function adduser(user: CreateUserParams) {
  try {
    await connectDb();
    const newuser = new User(user);
    await newuser.save();
    console.log("new user has been succesfully added");
    return newuser;
  } catch (error) {
    console.log("error has occured ", error);
  }
}

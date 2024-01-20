import { error } from "console";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function connectDb() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw error("there is no MONGODB URI");

  cached.promise =
    cached.process ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
}

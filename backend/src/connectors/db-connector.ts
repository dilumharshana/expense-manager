import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const NEW_DATABASE_CREATOR_URL = process.env.MONGO_DB_CONNECTION_STRING || "";

let con: any = {};

const connection = async (startServer: Function) => {
  try {
    con = await mongoose
      .connect(NEW_DATABASE_CREATOR_URL, {
        // useCreateIndex: true,
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
      } as ConnectOptions)
      .then((res) => startServer())
      .catch((err) => console.log(err));

    return con && con;
  } catch (error) {
    return error;
  }
};

export default connection;

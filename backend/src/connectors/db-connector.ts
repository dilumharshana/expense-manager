import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import { expenseModel } from "../models/expense-modle";
dotenv.config();

const NEW_DATABASE_CREATOR_URL = process.env.NEW_DATABASE_CREATOR_URL || "";

let con = {};

const connection = async () => {
  try {
    con = await mongoose.createConnection(NEW_DATABASE_CREATOR_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);

    //register model with connection
    con.model( expenseModel);

    return con && con;
  } catch (error) {
    return error;
  }
};

export default connection;

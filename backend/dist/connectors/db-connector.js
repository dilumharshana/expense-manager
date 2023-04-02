"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const NEW_DATABASE_CREATOR_URL = process.env.MONGO_DB_CONNECTION_STRING || "";
let con = {};
const connection = async (startServer) => {
    try {
        con = await mongoose_1.default
            .connect(NEW_DATABASE_CREATOR_URL, {
        // useCreateIndex: true,
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
        })
            .then((res) => startServer())
            .catch((err) => console.log(err));
        return con && con;
    }
    catch (error) {
        return error;
    }
};
exports.default = connection;

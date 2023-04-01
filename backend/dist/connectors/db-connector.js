"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URL = process.env.MONGO_DB_CONNECTION_STRING || "";
const connection = mongoose_1.default
    .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    poolSize: parseInt(process.env.POOL_SIZE),
})
    .then((res) => {
    console.log("Connected to Distribution API Database - Initial Connection");
})
    .catch((err) => {
    console.log(`Initial Distribution API Database connection error occured -`, err);
});
exports.default = connection;

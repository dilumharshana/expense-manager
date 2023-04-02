"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const expenseSchema = new mongoose_1.default.Schema({
    description: {
        type: String,
    },
    type: {
        type: String,
    },
    date: {
        type: String,
        min: 6,
    },
    amount: {
        type: Number,
        required: [true, "Please enter expense amount"],
    },
});
const ExpenseModel = mongoose_1.default.model('expense', expenseSchema);
exports.default = ExpenseModel;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExpense = void 0;
const expense_modle_1 = __importDefault(require("../models/expense-modle"));
const addExpense = async (req, res) => {
    try {
        const newExpense = req?.body;
        const response = await expense_modle_1.default.create(newExpense);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.addExpense = addExpense;

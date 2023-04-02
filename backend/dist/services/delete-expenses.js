"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = void 0;
const expense_modle_1 = __importDefault(require("../models/expense-modle"));
const deleteExpense = async (req, res) => {
    try {
        const id = req?.params?.id;
        if (!id) {
            res.status(404).json({ message: "Product Id not found" });
        }
        const response = await expense_modle_1.default.findByIdAndDelete(id);
        if (!response) {
            res.status(404).json({ message: "Failed to delete product" });
        }
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.deleteExpense = deleteExpense;

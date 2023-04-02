"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpense = void 0;
const expense_modle_1 = __importDefault(require("../models/expense-modle"));
const updateExpense = async (req, res) => {
    try {
        const id = req?.params?.id;
        if (!id) {
            res.status(404).json({ message: 'Product Id not found' });
        }
        const updatedData = req?.body;
        const response = await expense_modle_1.default.findByIdAndUpdate(id, updatedData);
        if (!response) {
            res.status(404).json({ message: 'Failed to update product' });
        }
        const updatedExpense = await expense_modle_1.default.findById(id);
        if (!updatedExpense) {
            res.status(404).json({ message: 'Failed to update product' });
        }
        res.status(200).json({ data: updatedExpense });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.updateExpense = updateExpense;

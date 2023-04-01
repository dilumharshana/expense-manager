"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add_expenses_1 = require("../services/add-expenses");
const delete_expenses_1 = require("../services/delete-expenses");
const get_expenses_1 = require("../services/get-expenses");
const update_expenses_1 = require("../services/update-expenses");
const router = express_1.default.Router();
router.get("/expenses", get_expenses_1.getExpenses);
router.post("/expense", add_expenses_1.addExpense);
router.put("/expense", update_expenses_1.updateExpense);
router.delete("/expense", delete_expenses_1.deleteExpense);
exports.default = router;

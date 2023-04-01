import express from "express";
import { addExpense } from "../services/add-expenses";
import { deleteExpense } from "../services/delete-expenses";
import { getExpenses } from "../services/get-expenses";
import { updateExpense } from "../services/update-expenses";

const router = express.Router();

router.get("/expenses", getExpenses);
router.post("/expense", addExpense);
router.put("/expense", updateExpense);
router.delete("/expense", deleteExpense);

export default router
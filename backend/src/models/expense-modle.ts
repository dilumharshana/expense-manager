import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
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
  },
});

const ExpenseModel = mongoose.model("expense", expenseSchema);

export default ExpenseModel;

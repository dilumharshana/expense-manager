import mongoose from "mongoose";


 const expenseSchema = new mongoose.Schema({
    description: {
        type: String,
      },
      type: {
        type: String,
        required: [true,"Please enter expense type"],
      },
      date: {
        type: String,
        required: [true,"Please enter expense date"],
        min: 6,
      },
      amount: {
        type: Number,
        required: [true,"Please enter expense amount"],
      },
})

const ExpenseModel = mongoose.model('expense' ,expenseSchema)

export default ExpenseModel
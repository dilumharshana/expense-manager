import mongoose from "mongoose";


export const expenseModel = new mongoose.Schema({
    description: {
        type: String,
      },
      type: {
        type: String,
        required: true,
        min: 2,
        max: 25,
      },
      date: {
        type: String,
        required: true,
        min: 6,
      },
      amount: {
        type: Number,
        required: true,
      },
})
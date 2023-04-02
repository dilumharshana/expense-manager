import ExpenseModel from "../models/expense-modle";

export const addExpense = async (req: any, res: any) => {
  try {
    const newExpense = req?.body;

    const response = await ExpenseModel.create(newExpense);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

import ExpenseModel from "../models/expense-modle";

export const getExpenses = async (req: any, res: any) => {
  try {
    const response = await ExpenseModel.find({});

    res.status(200).json({data:response});
  } catch (error) {
    res.status(500).json({message:error});
  }
};

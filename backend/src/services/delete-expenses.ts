import ExpenseModel from "../models/expense-modle";

export const deleteExpense = async (req: any, res: any) => {
  try {
    const id = req?.params?.id;

    if (!id) {
      res.status(404).json({ message: "Product Id not found" });
    }

    const response: any = await ExpenseModel.findByIdAndDelete(id);

    if (!response) {
      res.status(404).json({ message: "Failed to delete product" });
    }

    res.status(200).json({data:response});
  } catch (error) {
    res.status(500).json({message:error});
  }
};

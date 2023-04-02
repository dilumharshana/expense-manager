import ExpenseModel from "../models/expense-modle";

export const updateExpense = async( req:any,res:any) => { 

    try {

        const id = req?.params?.id;

        if(!id){
            res.status(404).json({message:'Product Id not found'});
        }

        const updatedData = req?.body 

        const response:any = await ExpenseModel.findByIdAndUpdate(id,updatedData);

        if(!response){
            res.status(404).json({message:'Failed to update product'});
        }
    
        const updatedExpense = await ExpenseModel.findById(id);

        if(!updatedExpense){
            res.status(404).json({message:'Failed to update product'});
        }
    

        res.status(200).json(updatedExpense);
      } catch (error) {
        res.status(500).json(error);
      }
}
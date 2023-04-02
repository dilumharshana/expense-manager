import { useState } from "react";
import { ExpenseContainer } from "../components/ExpenseContainer"
import { ExpenseSummury } from "../components/ExpenseSummury";
import { NavBar } from "../components/Navbar"
import { NewExpenseModal } from "../components/NewExpenseModal";

export const ExpenseLayout = () => {


  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')

  const newExpenseData = {
    type,setType,description,setDescription,date,setDate,amount,setAmount
  }
  
    const expenseList = [ {
        type:"bill",
        date:"20/01/2023",
        description:"paid",
        amount : "2500"
      }, {
        type:"bill",
        date:"20/01/2023",
        description:"paid",
        amount : "2500"
      }, {
        type:"bill",
        date:"20/01/2023",
        description:"paid",
        amount : "2500"
      }, {
        type:"bill",
        date:"20/01/2023",
        description:"paid",
        amount : "2500"
      }, {
        type:"bill",
        date:"20/01/2023",
        description:"paid",
        amount : "2500"
      }, {
        type:"bill",
        date:"20/01/2023",
        description:"paid",
        amount : "2500"
      }, {
        type:"bill",
        date:"20/01/2023",
        description:"paid",
        amount : "2500"
      }, {
        type:"bill",
        date:"20/01/2023",
        description:"paid",
        amount : "2500"
      }];

    return <>
    <NavBar/>
    <ExpenseSummury expenseList={expenseList} handleOpen={handleOpen}/>
    <ExpenseContainer expenseList={expenseList}/>
    <NewExpenseModal open={open} handleClose={handleClose} newExpenseData={newExpenseData}/>
    </>
}
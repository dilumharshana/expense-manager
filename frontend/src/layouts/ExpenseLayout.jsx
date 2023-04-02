import axios from "axios";
import { useEffect, useState } from "react";
import { ExpenseContainer } from "../components/ExpenseContainer";
import { ExpenseSummury } from "../components/ExpenseSummury";
import { NavBar } from "../components/Navbar";
import { NewExpenseModal } from "../components/NewExpenseModal";

export const ExpenseLayout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "X-Auth-Token": "97e0d315477f435489cf04904c9d0e6co",
      };

      const response = await axios.get("http://localhost:8070/api/expenses", {
        headers,
      });

      setExpenseList(response?.data?.data);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const newExpenseData = {
    type,
    setType,
    description,
    setDescription,
    date,
    setDate,
    amount,
    setAmount,
    expenseList,
    setExpenseList,
  };

  return (
    <>
      <NavBar />
      <ExpenseSummury expenseList={expenseList} handleOpen={handleOpen} />
      <ExpenseContainer expenseList={expenseList} />
      <NewExpenseModal
        open={open}
        handleClose={handleClose}
        newExpenseData={newExpenseData}
      />
    </>
  );
};

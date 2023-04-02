import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export const ExpenseCard = ({ expense, newExpenseData }) => {
  const handleDelete = async (expense) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "X-Auth-Token": "97e0d315477f435489cf04904c9d0e6co",
      };

      const response = await axios.delete(
        `http://localhost:8070/api/expense/${expense?._id}`,
        {
          headers,
        }
      );

      const fillterdItems = newExpenseData?.expenseList?.filter(
        (exp) => exp?._id !== expense?._id
      );

      newExpenseData?.setExpenseList(fillterdItems);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (expense) => {
    try {
      newExpenseData?.setType(expense?.type);
      newExpenseData?.setDescription(expense?.description);
      // newExpenseData?.setDate(new Date(expense?.date).toLocaleDateString());
      newExpenseData?.setAmount(expense?.amount);
      newExpenseData?.handleOpen();
      newExpenseData?.setSelectedId(expense?._id);
      newExpenseData?.setIsUpdateMode(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" mb={2}>
          Type: {expense.type}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Description :{expense.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Date : {expense.date}
        </Typography>
        <Typography variant="body2">Amount: {expense.amount}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleUpdate(expense)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(expense)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export const ExpenseSummury = ({ expenseList, handleOpen ,filter , setFilter }) => {
  let amount = 0;

  expenseList?.forEach((expense) => {
    if (!expense.amount || expense.amount === "") return;
    amount += parseInt(expense.amount);
  });

  return (
    <>
      <Grid container p={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <h1> Your total expenses: {amount}</h1>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          display="flex"
          alignItems="center"
          justifyContent="end"
        >
          <TextField
            placeholder="Fiter by type"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          display="flex"
          alignItems="center"
          justifyContent="end"
        >
          <Button variant="contained" onClick={handleOpen}>
            add new expense
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

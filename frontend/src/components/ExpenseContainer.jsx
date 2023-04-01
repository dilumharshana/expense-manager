import React from "react";

import { ExpenseCard } from "./ExpenseCard";
import Grid from "@mui/material/Grid";

export const ExpenseContainer = ({ expenseList }) => {
  return (
    <Grid container p={3} spacing={2}>
      {expenseList.map((expense) => {
        return (
          <Grid item>
            <ExpenseCard expense={expense} />
          </Grid>
        );
      })}
    </Grid>
  );
};

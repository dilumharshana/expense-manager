import React from "react";

import { ExpenseCard } from "./ExpenseCard";
import Grid from "@mui/material/Grid";

export const ExpenseContainer = ({ newExpenseData }) => {
  if (newExpenseData?.filter?.length > 0) {
    console.log(newExpenseData?.expenseList);
    return (
      <Grid container p={3} spacing={2}>
        {newExpenseData?.expenseList
          .filter((exp) => exp.type?.includes(newExpenseData?.filter))
          .map((expense) => {
            return (
              <Grid item>
                <ExpenseCard
                  expense={expense}
                  newExpenseData={newExpenseData}
                />
              </Grid>
            );
          })}
      </Grid>
    );
  }

  return (
    <Grid container p={3} spacing={2}>
      {newExpenseData?.expenseList.map((expense) => {
        return (
          <Grid item>
            <ExpenseCard expense={expense} newExpenseData={newExpenseData} />
          </Grid>
        );
      })}
    </Grid>
  );
};

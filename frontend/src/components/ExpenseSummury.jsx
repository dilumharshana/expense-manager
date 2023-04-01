import React from 'react'
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

export const ExpenseSummury = ({expenseList}) => {

    let amount = 0

    expenseList?.forEach( expense => {
        amount += parseInt(expense.amount)
    })

  return (
    <>
    <Grid container p={3}>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}><h1> Your total expenses: {amount}</h1></Grid>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display="flex" alignItems="center" justifyContent="end">
        <Button variant='contained'>
            add new expense
        </Button>
    </Grid>
    </Grid>
    </>
  )
}

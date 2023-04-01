import { ExpenseContainer } from "../components/ExpenseContainer"
import { ExpenseSummury } from "../components/ExpenseSummury";
import { NavBar } from "../components/Navbar"

export const ExpenseLayout = () => {

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
    <ExpenseSummury expenseList={expenseList}/>
    <ExpenseContainer expenseList={expenseList}/>
    </>
}
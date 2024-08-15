import { useState } from "react";
import ExpenseList from "./components/ExpenseList"
import Form, { Expense } from "./components/Form"

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (newExpense: Expense) => {
    setExpenses([...expenses, newExpense])
  }
  return (
    <div>
      <Form onSubmit = {addExpense} />
      <ExpenseList expenses = {expenses}/>
    </div>
    
  )
}

export default App

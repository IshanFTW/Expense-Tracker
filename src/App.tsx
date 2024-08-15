import { useState } from "react";
import ExpenseList from "./components/ExpenseList"
import Form, { Expense } from "./components/Form"

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (newExpense: Expense) => {
    setExpenses([...expenses, newExpense])
  }

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };
  
  return (
    <div>
      <Form onSubmit = {addExpense} />
      <ExpenseList expenses = {expenses} ondeleteExpense={deleteExpense}/>
    </div>
    
  )
}

export default App

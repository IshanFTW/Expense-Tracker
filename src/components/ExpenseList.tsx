import { Expense } from "./Form"

interface ExpenseListProps{
    expenses: Expense[];
}
function ExpenseList({expenses}: ExpenseListProps) {
  return (
    <div>
        {
            expenses.map((expense, index) => (
                <div key={index}>
                    <h3>{expense.description}</h3>
                    <p>Amount: ${expense.amount}</p>
                    <p>Date: {expense.date.toLocaleDateString()}</p>
                    <p>Category: {expense.category}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ExpenseList
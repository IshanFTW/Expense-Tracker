import { Expense } from "./Form"

interface ExpenseListProps{
    expenses: Expense[];
    ondeleteExpense: (id: number) => void;
}
function ExpenseList({expenses, ondeleteExpense}: ExpenseListProps) {
  return (
    <div>
        {
            expenses.map(expense => (
                <div key={expense.id}>
                    <h3>{expense.description}</h3>
                    <p>Amount: ${expense.amount}</p>
                    <p>Date: {expense.date.toLocaleDateString()}</p>
                    <p>Category: {expense.category}</p>
                    <button>Edit</button>
                    <button onClick={() => ondeleteExpense(expense.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default ExpenseList
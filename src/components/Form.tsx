import { useState } from "react";

export interface Expense {
  description: string;
  amount: number;
  date: Date;
  category: string;
}

interface FormProps{
    onSubmit: (expense: Expense) => void;
}

function Form({onSubmit}: FormProps) {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense: Expense = {
        description,
        amount,
        date: new Date(date),
        category,
    };

    onSubmit(newExpense);

        setDescription('');
        setAmount(0);
        setDate('');
        setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value === '' ? 0 : parseFloat(e.target.value))} />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default Form;

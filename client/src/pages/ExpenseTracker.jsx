import { useEffect, useState } from "react";

import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";
import { Flex } from "@chakra-ui/react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('userInfo'))
  // console.log(expenses);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/expense', { headers: { Authorization: `Bearer ${token}` } })
      const json = await response.json();
      if (response.ok)
        setExpenses(json.map((e) => {
          let expense = { ...e };
          expense.date = new Date(e.date);
          expense.amount = e.amount.$numberDecimal;
          return expense;
        }));
    })()
  }, [token]);

  const addExpenseHandler = async (expense) => {
    const response = await fetch('/api/expense', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    });
    const json = await response.json();
    console.log(json);
    if (response.ok)
      setExpenses(e => [...e, { ...json, date: new Date(json.date), amount: json.amount.$numberDecimal }]);
  };

  return (

    <>
      <Flex direction='column' gap={4} justifyContent='center' alignItems='center'>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </Flex>
    </>
  );
};

export default ExpenseTracker;

import { useEffect, useState } from "react";

import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";
import { Flex } from "@chakra-ui/react";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        category: 'Other',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        category: 'Other',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: "e3",
        title: "Car Insurance",
        category: 'Bills',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        category: 'Other',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const { token } = localStorage.getItem('userInfo')
    useEffect(() => {
        (async () => {
            const response = await fetch('/api/expense', { headers: { Authorization: `Bearer ${token}` } })
            const json = await response.json();
            setExpenses(json);
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
        if (response.ok)
            setExpenses(e => [...e, json]);
    };

    return (

        <>
            {/* <Navbar /> */}
            <Flex direction='column' gap={4} justifyContent='center' alignItems='center' className="expense-tracker-container">
                <NewExpense onAddExpense={addExpenseHandler} />
                <Expenses items={expenses} />
            </Flex>
        </>
    );
};

export default ExpenseTracker;

import { useState } from "react";
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import { Card } from "@chakra-ui/react";

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState("2022");
    const [filteredCategory, setFilteredCategory] = useState("All");

    const filteredExpenses = items
        .filter((e) => e.date.getFullYear().toString() === filteredYear)
        .filter((e) => filteredCategory === 'All' ? true : e.category === filteredCategory);


    return (
        <Card p={4} backgroundColor='rgb(31, 31, 31)' w='50rem' >
            <ExpensesFilter
                setYear={setFilteredYear}
                setCategory={setFilteredCategory}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;

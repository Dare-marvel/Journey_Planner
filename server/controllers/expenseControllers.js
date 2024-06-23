const { Expense } = require("../models");

const addExpense = async (req, res) => {
    const { title, category, amount, date } = req.body;
    const expense = await Expense.create({ title, category, amount, date, user: req.user._id });
    // console.log(expense);
    if (expense)
        res.json(expense);
    else
        res.status(400).json({ error: { message: 'Couldn\'t add expense' } })
}
const getExpenses = async (req, res) => {
    const expenses = await Expense.find({ user: req.user._id });
    // console.log(expenses);
    if (expenses)
        res.json(expenses);
    else
        res.status(400).json({ error: { message: 'Couldn\'t get expenses' } })
}
module.exports = { addExpense, getExpenses };
const mongoose = require("mongoose");

const ExpenseSchema = mongoose.Schema(
    {
        title: String,
        category: String,
        amount: mongoose.Types.Decimal128,
        date: Date,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

module.exports = mongoose.model("Expense", ExpenseSchema);


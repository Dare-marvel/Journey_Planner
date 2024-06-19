const express = require("express");

const { protect } = require("../middleware");
const { getExpenses, addExpense } = require("../controllers/expenseControllers");

const router = express.Router();

router.get("/", protect, getExpenses)
router.post("/", protect, addExpense);

module.exports = router;

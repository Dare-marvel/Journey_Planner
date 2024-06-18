const express = require("express");

const { protect } = require("../middleware");
const { getExpenses, addExpense } = require("../controllers/expenseControllers");

const router = express.Router();

router.get("/", getExpenses)
router.post("/", addExpense);

module.exports = router;

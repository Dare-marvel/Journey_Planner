import { Flex } from "@chakra-ui/react";
import Chart from "../Chart/Chart";
import PieChart from "../Chart/PieChart";

// const amountPerCategory = [10, 20, 30, 40, 50, 60, 70]
const categories = ['Travel', 'Recreational', 'Medical', 'Bills', 'Rent', 'Food', 'Other']

const ExpensesChart = ({ expenses }) => {
    // console.log(expenses);
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    let amountPerCategory = [0, 0, 0, 0, 0, 0, 0]
    let totalAmount = 0

    for (const expense of expenses) {
        const expenseMonth = expense.date.getMonth(); // Starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount;
        amountPerCategory[categories.findIndex((e) => e === expense.category)] += Number(expense.amount);
        totalAmount += Number(expense.amount);
    }
    // console.log(amountPerCategory);
    return <Flex w='100%' justify='space-evenly' align='center' gap={4}>
        <PieChart amountPerCategory={amountPerCategory} totalAmount={totalAmount} />
        <Chart dataPoints={chartDataPoints} />
    </Flex>
};

export default ExpensesChart;
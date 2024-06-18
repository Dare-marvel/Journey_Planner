import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { Flex, Text } from "@chakra-ui/react";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <Text as='h2' color='white' textAlign='center'>Found no expenses.</Text>;
    }

    return (
        <Flex direction='column' gap={4} pt={4}>
            <Flex direction='row' color='white' textAlign='center'>
                <Text flexGrow={1}>Date</Text>
                <Text flexGrow={1}>Title</Text>
                <Text flexGrow={1}>Category</Text>
                <Text flexGrow={1}>Amount</Text>
            </Flex>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    category={expense.category}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Flex>
    );
};

export default ExpensesList;

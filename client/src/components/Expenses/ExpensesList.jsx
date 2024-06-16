import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { Flex, Text } from "@chakra-ui/react";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <Text as='h2' color='white' textAlign='center'>Found no expenses.</Text>;
    }

    return (
        <Flex direction='column' gap={4} pt={4}>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Flex>
    );
};

export default ExpensesList;

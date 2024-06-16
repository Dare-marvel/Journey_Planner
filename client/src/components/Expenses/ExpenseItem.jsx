import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { Box, Flex, Text } from "@chakra-ui/react";

const ExpenseItem = (props) => {
    return (
        <Box>
            <Flex borderRadius='12px' justifyContent='space-between' alignItems='center' backgroundColor='#4b4b4b' p={2}>
                <ExpenseDate date={props.date} />
                <Flex direction={{ base: 'column', md: 'row' }} gap={4} alignItems={{ base: 'flex-end', md: 'center' }} flexFlow='column-reverse' justifyContent='flex-start' flex={1} >
                    <Text as='h2' px={4} color='white' fontSize='1rem' flex={1}>{props.title}</Text>
                    <Box fontSize='1rem' fontWeight='bold' backgroundColor='#40005d' border='1px solid white' color='white' p={2} borderRadius='12px' >${props.amount}</Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default ExpenseItem;

import "./ExpenseItem.css";
import { Box, Flex, Text } from "@chakra-ui/react";

const ExpenseItem = (props) => {
    return (
        <Box>
            <Flex borderRadius='12px' textAlign='center' justifyContent='space-between' alignItems='center' backgroundColor='#4b4b4b' p={2}>
                {/* <ExpenseDate flexGrow={1} date={props.date} /> */}
                <Text flexGrow={1} as='h2' px={4} color='white' fontSize='1rem' flex={1}>{props.date.toDateString()}</Text>
                <Text flexGrow={1} as='h2' px={4} color='white' fontSize='1rem' flex={1}>{props.title}</Text>
                <Text flexGrow={1} as='h2' px={4} color='white' fontSize='1rem' flex={1}>{props.category}</Text>
                <Text flexGrow={1} as='h2' px={4} color='white' fontSize='1rem' flex={1} fontWeight='bold'>${props.amount}</Text>
                {/* <Box flexGrow={1} fontSize='1rem' fontWeight='bold' backgroundColor='#40005d' border='1px solid white' color='white' p={2} borderRadius='12px' >${props.amount}</Box> */}

            </Flex>
        </Box>
    );
};

export default ExpenseItem;

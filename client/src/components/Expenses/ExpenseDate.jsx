import { Flex, Text } from '@chakra-ui/react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <Flex flexGrow={1} direction='column' w='5.5rem' h='5.5rem' border='1px solid #ececec' backgroundColor='#2a2a2a' color='white' borderRadius='12px' justify='center' align='center' >
            <Text fontSize='0.75rem' fontWeight='bold'>{month}</Text>
            <Text fontSize='0.75rem'>{year}</Text>
            <Text fontSize='1.5rem' fontWeight='bold'>{day}</Text>
        </Flex>
    );
};

export default ExpenseDate;
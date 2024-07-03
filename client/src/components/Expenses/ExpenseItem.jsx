// import "./ExpenseItem.css";
import { Flex, Text } from "@chakra-ui/react";

const ExpenseItem = (props) => {
  return (
    <Flex rounded='md' _dark={{ backgroundColor: 'gray.800' }} _light={{ backgroundColor: 'gray.100' }} textAlign='center' justifyContent='space-between' alignItems='center' p={2}>
      {/* <ExpenseDate flexGrow={1} date={props.date} /> */}
      <Text flexGrow={1} as='h2' px={4} fontSize='1rem' flex={1}>{props.date.toDateString()}</Text>
      <Text flexGrow={1} as='h2' px={4} fontSize='1rem' flex={1}>{props.title}</Text>
      <Text flexGrow={1} as='h2' px={4} fontSize='1rem' flex={1}>{props.category}</Text>
      <Text flexGrow={1} as='h2' px={4} fontSize='1rem' flex={1} fontWeight='bold'>${props.amount}</Text>
      {/* <Box flexGrow={1} fontSize='1rem' fontWeight='bold' backgroundColor='#40005d' border='1px solid white' color='white' p={2} borderRadius='12px' >${props.amount}</Box> */}

    </Flex>
  );
};

export default ExpenseItem;

import { useState } from 'react';

import './ExpenseForm.css';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <FormControl display='flex' flexWrap='wrap' gap={4} mb={4} >
                <Box>
                    <FormLabel fontWeight='bold' >Title</FormLabel>
                    <Input
                        backgroundColor='white'
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </Box>
                <Box>
                    <FormLabel fontWeight='bold'>Amount</FormLabel>
                    <Input
                        backgroundColor='white'
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </Box>
                <Box className='new-expense__control'>
                    <FormLabel fontWeight='bold'>Date</FormLabel>
                    <Input
                        backgroundColor='white'
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </Box>
            </FormControl>
            <Box textAlign='right'>
                <Button backgroundColor='#40005d' color='white' _hover={{ backgroundColor: '#510674' }} onClick={props.onCancel} mr={2}>Cancel</Button>
                <Button type='submit' backgroundColor='#40005d' color='white' _hover={{ backgroundColor: '#510674' }} >Add Expense</Button>
            </Box>
        </form>
    );
};

export default ExpenseForm;
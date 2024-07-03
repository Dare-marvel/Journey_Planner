import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [category, setCategory] = useState('Other');
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
      category,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setCategory('Other');
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl display='flex' flexWrap='wrap' gap={4} mb={4} >
        <Box>
          <FormLabel fontWeight='bold' >Title</FormLabel>
          <Input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </Box>
        <Box>
          <FormLabel fontWeight='bold' >Category</FormLabel>
          <Select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="Travel">Travel</option>
            <option value="Recreational">Recreational</option>
            <option value="Medical">Medical</option>
            <option value="Bills">Bills</option>
            <option value="Rent">Rent</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </Select>
        </Box>
        <Box>
          <FormLabel fontWeight='bold'>Amount</FormLabel>
          <Input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </Box>
        <Box>
          <FormLabel fontWeight='bold'>Date</FormLabel>
          <Input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </Box>
      </FormControl>
      <Box textAlign='right'>
        <Button colorScheme='purple' onClick={props.onCancel} mr={2}>Cancel</Button>
        <Button type='submit' colorScheme='purple' >Add Expense</Button>
      </Box>
    </form>
  );
};

export default ExpenseForm;
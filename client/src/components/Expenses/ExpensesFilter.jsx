import { Box, FormControl, FormLabel, Select } from '@chakra-ui/react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <Box color='white' px={4} py={2}>
            <FormControl className='expenses-filter__control'>
                <FormLabel fontWeight='bold'>Filter by year</FormLabel>
                <Select w='auto' backgroundColor='white' color='black' value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </Select>
            </FormControl>
        </Box>
    );
};

export default ExpensesFilter;
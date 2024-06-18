import { Box, Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';
import './ExpensesFilter.css';

const ExpensesFilter = ({ setYear, setCategory }) => {

    return (
        <Box color='white' px={4} py={2}>
            <FormControl as={Flex} gap={4}>
                <Box>
                    <FormLabel fontWeight='bold'>Year</FormLabel>
                    <Select w='auto' backgroundColor='white' color='black' onChange={(e) => setYear(e.target.value)}>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                    </Select>
                </Box>
                <Box>
                    <FormLabel fontWeight='bold'>Category</FormLabel>
                    <Select w='auto' backgroundColor='white' color='black' onChange={(e) => setCategory(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Travel">Travel</option>
                        <option value="Recreational">Recreational</option>
                        <option value="Medical">Medical</option>
                        <option value="Bills">Bills</option>
                        <option value="Rent">Rent</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other</option>
                    </Select>
                </Box>
            </FormControl>
        </Box>
    );
};

export default ExpensesFilter;
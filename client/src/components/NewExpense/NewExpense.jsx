import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { Button, Card } from '@chakra-ui/react';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const startEditingHandler = () => {
        setEditing(true);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const stopEditingHandler = () => {
        setEditing(false);
    }

    return (
        <Card backgroundColor='#a892ee' p={4} mt={4} >
            {!isEditing && <Button backgroundColor='#40005d' color='white' _hover={{ backgroundColor: '#510674' }} onClick={startEditingHandler}>Add New Expense</Button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />}
        </Card>
    );
};

export default NewExpense;
import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import { Button, Card } from '@chakra-ui/react';

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
    setEditing(false);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  }

  return (
    <Card p={4} mt={4} >
      {!isEditing && <Button colorScheme='purple' onClick={startEditingHandler}>Add New Expense</Button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />}
    </Card>
  );
};

export default NewExpense;
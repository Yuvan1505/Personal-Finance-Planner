// This file contains JavaScript functions for adding, editing, and deleting transactions.

const transactions = [];

// Function to add a transaction
function addTransaction(transaction) {
    transactions.push(transaction);
    updateTransactionList();
}

// Function to edit a transaction
function editTransaction(index, updatedTransaction) {
    if (index >= 0 && index < transactions.length) {
        transactions[index] = updatedTransaction;
        updateTransactionList();
    }
}

// Function to delete a transaction
function deleteTransaction(index) {
    if (index >= 0 && index < transactions.length) {
        transactions.splice(index, 1);
        updateTransactionList();
    }
}

// Function to update the transaction list display
function updateTransactionList() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.date} - ${transaction.description}: $${transaction.amount}`;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTransaction(index, promptForTransactionDetails(transaction));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTransaction(index);

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        transactionList.appendChild(listItem);
    });
}

// Function to prompt for transaction details
function promptForTransactionDetails(existingTransaction) {
    const date = prompt('Enter transaction date:', existingTransaction.date);
    const description = prompt('Enter transaction description:', existingTransaction.description);
    const amount = parseFloat(prompt('Enter transaction amount:', existingTransaction.amount));

    return { date, description, amount };
}
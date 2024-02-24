// Expense data array
let expenses = [];

// DOM elements
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const expenseSummary = document.getElementById('expenseSummary');
const addExpenseBtn = document.getElementById('addExpenseBtn');

// Add expense event
addExpenseBtn.addEventListener('click', function() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if (expenseName && expenseAmount) {
        expenses.push({ name: expenseName, amount: expenseAmount });
        updateExpensesList();
        displayExpenses();
        expenseForm.reset();
    } else {
        alert('Please enter expense name and amount');
    }
});

// Update expenses list function
function updateExpensesList() {
    expenseList.innerHTML = '';
    expenses.forEach(function(expense) {
        const expenseItem = document.createElement('div');
        expenseItem.textContent = `${expense.name}: RS: ${expense.amount.toFixed(2)}`;
        expenseList.appendChild(expenseItem);
    });
}

// Display expenses and calculations
function displayExpenses() {
    let totalExpenses = 0;
    expenses.forEach(function(expense) {
        totalExpenses += expense.amount;
    });
    const averageExpense = totalExpenses / expenses.length;

    expenseSummary.innerHTML = `
        <p>Total Expenses: RS: ${totalExpenses.toFixed(2)}</p>
        
    `;
}

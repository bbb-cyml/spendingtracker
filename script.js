document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const expenseName = document.getElementById('expenseName').value;
    const amount = document.getElementById('amount').value;
    if (expenseName && amount) {
        addExpense(expenseName, amount);
    }
    document.getElementById('expenseForm').reset();
});

function addExpense(name, amount) {
    const expenseList = document.getElementById('list');
    const li = document.createElement('li');
    li.textContent = `${name}: $${amount}`;
    expenseList.appendChild(li);
}

// This file contains JavaScript functions for managing budgets and savings goals, including progress tracking.

const budgetGoals = [];

// Function to add a new budget goal
function addBudgetGoal(goal) {
    budgetGoals.push(goal);
    updateBudgetDisplay();
}

// Function to remove a budget goal
function removeBudgetGoal(goalId) {
    const index = budgetGoals.findIndex(goal => goal.id === goalId);
    if (index !== -1) {
        budgetGoals.splice(index, 1);
        updateBudgetDisplay();
    }
}

// Function to update the display of budget goals
function updateBudgetDisplay() {
    const budgetContainer = document.getElementById('budget-goals-container');
    budgetContainer.innerHTML = '';

    budgetGoals.forEach(goal => {
        const goalElement = document.createElement('div');
        goalElement.className = 'budget-goal';
        goalElement.innerHTML = `
            <h3>${goal.name}</h3>
            <p>Target Amount: $${goal.targetAmount}</p>
            <p>Current Amount: $${goal.currentAmount}</p>
            <p>Progress: ${calculateProgress(goal)}%</p>
            <button onclick="removeBudgetGoal(${goal.id})">Remove</button>
        `;
        budgetContainer.appendChild(goalElement);
    });
}

// Function to calculate progress towards a budget goal
function calculateProgress(goal) {
    return ((goal.currentAmount / goal.targetAmount) * 100).toFixed(2);
}

// Example usage
addBudgetGoal({ id: 1, name: 'Vacation Fund', targetAmount: 2000, currentAmount: 500 });
addBudgetGoal({ id: 2, name: 'Emergency Fund', targetAmount: 5000, currentAmount: 1500 });
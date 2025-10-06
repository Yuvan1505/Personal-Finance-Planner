// This file contains JavaScript functions for generating insights and rewards based on user spending behavior.

document.addEventListener('DOMContentLoaded', function() {
    const insightsContainer = document.getElementById('insights-container');
    const rewardsContainer = document.getElementById('rewards-container');

    function fetchInsights() {
        // Simulated fetch for insights data
        const insightsData = [
            { category: 'Food', amount: 200, trend: 'increased' },
            { category: 'Transport', amount: 150, trend: 'decreased' },
            { category: 'Entertainment', amount: 100, trend: 'stable' },
        ];

        insightsData.forEach(insight => {
            const insightElement = document.createElement('div');
            insightElement.className = 'insight-card';
            insightElement.innerHTML = `
                <h3>${insight.category}</h3>
                <p>Amount Spent: $${insight.amount}</p>
                <p>Trend: ${insight.trend}</p>
            `;
            insightsContainer.appendChild(insightElement);
        });
    }

    function fetchRewards() {
        // Simulated fetch for rewards data
        const rewardsData = [
            { type: 'Cashback', points: 50 },
            { type: 'Discount', points: 30 },
            { type: 'Gift Card', points: 20 },
        ];

        rewardsData.forEach(reward => {
            const rewardElement = document.createElement('div');
            rewardElement.className = 'reward-card';
            rewardElement.innerHTML = `
                <h3>${reward.type}</h3>
                <p>Points Earned: ${reward.points}</p>
            `;
            rewardsContainer.appendChild(rewardElement);
        });
    }

    fetchInsights();
    fetchRewards();
});
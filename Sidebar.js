import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assuming you have a separate CSS file for Sidebar styles

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/add-transaction">Add Transaction</Link></li>
                <li><Link to="/budget-goals">Budget & Goals</Link></li>
                <li><Link to="/insights-rewards">Insights & Rewards</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/profile-settings">Profile & Settings</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
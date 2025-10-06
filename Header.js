import React, { useState } from 'react';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <header className="header">
            <div className="logo">Personal Financial Planner</div>
            <div className="user-avatar">
                <img src="/path/to/avatar.png" alt="User Avatar" />
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
};

export default Header;
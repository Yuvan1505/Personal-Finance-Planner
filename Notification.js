import React from 'react';

const Notification = ({ notifications, onDelete }) => {
    return (
        <div className="notification-container">
            <h2>Notifications</h2>
            {notifications.length === 0 ? (
                <p>No notifications at this time.</p>
            ) : (
                <ul>
                    {notifications.map((notification, index) => (
                        <li key={index} className="notification-item">
                            <span>{notification.message}</span>
                            <button onClick={() => onDelete(index)} className="delete-button">Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Notification;
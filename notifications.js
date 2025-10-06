// This file contains JavaScript functions for managing notifications and reminders.

document.addEventListener('DOMContentLoaded', () => {
    const notificationList = document.getElementById('notification-list');
    const addNotificationForm = document.getElementById('add-notification-form');
    const notificationInput = document.getElementById('notification-input');

    // Load existing notifications from local storage
    loadNotifications();

    // Event listener for adding a new notification
    addNotificationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const notificationText = notificationInput.value.trim();
        if (notificationText) {
            addNotification(notificationText);
            notificationInput.value = '';
        }
    });

    // Function to load notifications from local storage
    function loadNotifications() {
        const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
        notifications.forEach(notification => {
            displayNotification(notification);
        });
    }

    // Function to add a new notification
    function addNotification(text) {
        const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
        notifications.push(text);
        localStorage.setItem('notifications', JSON.stringify(notifications));
        displayNotification(text);
    }

    // Function to display a notification
    function displayNotification(text) {
        const notificationItem = document.createElement('li');
        notificationItem.textContent = text;
        notificationList.appendChild(notificationItem);
    }

    // Function to delete a notification (to be implemented)
    function deleteNotification(index) {
        // Logic for deleting a notification
    }
});
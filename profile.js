// This file contains JavaScript functions for handling user profile updates and data export options.

document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const exportButton = document.getElementById('export-data');

    // Load user profile data
    loadUserProfile();

    // Event listener for profile form submission
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        updateUserProfile();
    });

    // Event listener for data export
    exportButton.addEventListener('click', exportUserData);
});

// Function to load user profile data
function loadUserProfile() {
    // Fetch user data from API or local storage
    const userData = JSON.parse(localStorage.getItem('userProfile')) || {};
    document.getElementById('username').value = userData.username || '';
    document.getElementById('email').value = userData.email || '';
}

// Function to update user profile
function updateUserProfile() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Save updated data to API or local storage
    const updatedData = { username, email };
    localStorage.setItem('userProfile', JSON.stringify(updatedData));

    alert('Profile updated successfully!');
}

// Function to export user data
function exportUserData() {
    const userData = localStorage.getItem('userProfile');
    const blob = new Blob([userData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'userProfile.json';
    a.click();
    URL.revokeObjectURL(url);
}
window.onload = function() {
    const loginForm = document.getElementById('loginForm');  // Fix: Define loginForm
    const existingButton = document.getElementById('existing');
    
    // Check if username and password are stored in local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
        existingButton.style.display = 'block';  // Show the "Login as existing user" button
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {  // Fix: Use rememberMe directly
            // Save username and password in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove username and password from local storage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    existingButton.addEventListener('click', function() {
        alert(`Logged in as ${storedUsername}`);
    });
}

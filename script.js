const form = document.querySelector('form');
const submit = document.getElementById("submit");
const checkbox = document.getElementById("checkbox");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Function to create or update the existing user button
function updateExistingUserButton() {
    let existingUserButton = document.getElementById("existing");
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        if (!existingUserButton) {
            existingUserButton = document.createElement("button");
            existingUserButton.id = "existing";
            existingUserButton.textContent = "Login as existing user";
            document.body.appendChild(existingUserButton);
        }
        existingUserButton.style.display = "block";
        existingUserButton.addEventListener("click", () => {
            alert(`Logged in as ${localStorage.getItem("username")}`);
        });
    } else if (existingUserButton) {
        existingUserButton.style.display = "none";
    }
}

// Call this function on page load
updateExistingUserButton();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Logged in as ${username.value}`);
    
    if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
    
    updateExistingUserButton();
});
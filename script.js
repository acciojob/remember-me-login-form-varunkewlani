const submit = document.getElementById("submit");
const checkbox = document.getElementById("checkbox");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        alert(`Logged in as ${username}`);

      
        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        // Show the "Login as existing user" button if user details are stored
        if (localStorage.getItem("username") && localStorage.getItem("password")) {
            
                const existingUserButton = document.createElement("button");
                existingUserButton.id = "existing";
                existingUserButton.textContent = "Login as existing user";
                existingUserButton.addEventListener("click", () => {
                    alert(`Logged in as ${localStorage.getItem("username")}`);
                });
                document.body.appendChild(existingUserButton);
            
        }
    });

    // Show the "Login as existing user" button if user details are already stored

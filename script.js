// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    const checkbox = document.getElementById("checkbox");

    // Function to handle the submit click event
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        alert(`Logged in as .`);

        // Save or remove user details based on the checkbox status
        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        // Show the "Login as existing user" button if user details are stored
        if (localStorage.getItem("username") && localStorage.getItem("password")) {
            if (!document.getElementById("existing")) {
                const existingUserButton = document.createElement("button");
                existingUserButton.id = "existing";
                existingUserButton.textContent = "Login as existing user";
                existingUserButton.addEventListener("click", () => {
                    alert(`Logged in as ${localStorage.getItem("username")}.`);
                });
                document.body.appendChild(existingUserButton);
            }
        }
    });
if(checkbox.checked) 
{
	const existingUserButton = document.createElementById("existing");
    existingUserButton.textContent = "Login as existing user";
	existingUserButton.addEventListener("click", () => 
		{
			alert(`Logged in as .`);
        });
        document.body.appendChild(existingUserButton);
    }
});

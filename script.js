//your JS code here. If required.
let submit=document.getElementById("submit");
let checkbox=document.getElementById("checkbox");

submit.addEventListener("click", (e)=>
{
	e.preventDefault();
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	alert("Logged in as .")
	
	if(checkbox.checked)		
	{
		localStorage.setItem("user", username);
		localStorage.setItem("pass", password);
	}
	else
	{
		localStorage.removeItem("user");
		localStorage.removeItem("pass");
	}
})
if(localStorage("user") && localStorage("pass"))
{
	body.innerHTML+= `<button id="existing">Login as existing user.</button>`
	
}
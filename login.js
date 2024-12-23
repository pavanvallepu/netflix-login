const correctEmail = "pavan@gmail.com";
const correctPassword = "pavan123";
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;
    if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
        window.location.href = "movie.html";
    } else {
        document.getElementById("loginError").style.display = "block";
    }
});

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    
    messageDiv.classList.remove("success", "error");
    messageDiv.style.display = "none";

    
    if (password.length < 8) {
        messageDiv.textContent = "Password must be at least 8 characters long.";
        messageDiv.classList.add("error");
        messageDiv.style.display = "block";
    } else if (!/[A-Z]/.test(password)) {
        messageDiv.textContent = "Password must contain at least one uppercase letter.";
        messageDiv.classList.add("error");
        messageDiv.style.display = "block";
    } else if (!/[a-z]/.test(password)) {
        messageDiv.textContent = "Password must contain at least one lowercase letter.";
        messageDiv.classList.add("error");
        messageDiv.style.display = "block";
    } else if (!/[0-9]/.test(password)) {
        messageDiv.textContent = "Password must contain at least one number.";
        messageDiv.classList.add("error");
        messageDiv.style.display = "block";
    } else {
        messageDiv.textContent = "Password is acceptable!";
        messageDiv.classList.add("success");
        messageDiv.style.display = "block";
    }
});

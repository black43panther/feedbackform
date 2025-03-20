document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let responseMessage = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
        responseMessage.style.color = "red";
        responseMessage.textContent = "All fields are required!";
        return;
    }

    if (!validateEmail(email)) {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Enter a valid email address!";
        return;
    }

    responseMessage.style.color = "green";
    responseMessage.textContent = "Thank you for your feedback, " + name + "!";

    // Clear form
    document.getElementById("feedbackForm").reset();
});

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
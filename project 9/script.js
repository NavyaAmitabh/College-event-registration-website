function registerEvent(event) {
    // Prevent default form submission refresh
    event.preventDefault();

    const eventName = document.getElementById("event-select").value;
    const name = document.getElementById("student-name").value.trim();
    const email = document.getElementById("student-email").value.trim();
    const msg = document.getElementById("confirmation-msg");

    // Basic validation check
    if (!eventName || !name || !email) {
        msg.textContent = "Please fill out all fields.";
        msg.style.color = "red";
        return;
    }

    // Success confirmation message
    msg.textContent = `Success! Thank you, ${name}, for registering for ${eventName}.`;
    msg.style.color = "green";

    // Clear form fields
    document.getElementById("event-form").reset();
}
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const whatsappNumber = "254769724971"; // e.g., "1234567890"
        const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;

        // Format the WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Show feedback message
        alert("Your message has been sent. We will get back to you shortly.");
    } else {
        alert("Please fill out all fields.");
    }
}

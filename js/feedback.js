document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contactNo = document.getElementById("contactNo").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (contactNo === "") {
        alert("Please enter your contact number.");
        return;
    } else if (!/^\d+$/.test(contactNo)) {
        alert("Contact number must contain only digits.");
        return;
    } else if (contactNo.length < 10 || contactNo.length > 15) {
        alert("Contact number must be between 10 and 15 digits.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }


    alert("Form submitted successfully!");
    this.submit();
});
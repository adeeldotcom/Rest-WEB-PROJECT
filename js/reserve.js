
let audio;
let isPlaying = false;

function validateForm() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const number = document.getElementById('number').value;
    const date = document.getElementById('date').value;
    const nameRegex = /^[A-Za-z ]+$/;    //name should be upper and lower case characters with space
    const contactRegex = /^\d{11}$/;
    const numberRegex = /^[1-9]\d*$/;

    if (!name.match(nameRegex)) {
        alert("Name should only contain small and capital letters.");
        return false;
    }

    if (!contact.match(contactRegex)) {
        alert("Contact number should be exactly 11 digits.");
        return false;
    }

    if (!number.match(numberRegex)) {
        alert("Number of members should be a positive integer.");
        return false;
    }

    if (date.trim() === "") {
        alert("Please select a date and time.");
        return false;
    }

    return true;
}

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    } else {
        if (audio) {
            audio.pause();
        }
        audio = new Audio('./images/audio/audio.mp3');
        audio.play();
        isPlaying = true;
    }
}

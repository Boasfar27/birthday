let audio;

function submitName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput.trim() !== "") {
        document.getElementById('birthdayName').innerText = `Happy Birthday, ${nameInput}!`;
        document.getElementById('nameModal').style.display = 'none';
        document.getElementById('birthdayContent').style.display = 'block';
        alert(`Welcome, ${nameInput}! Enjoy the birthday celebration.`);
    } else {
        alert("Please enter a name.");
    }
}

function playMusic() {
    audio = new Audio('happy-birthday-220024.mp3');
    audio.play();
    document.getElementById('playButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline-block';
}

function stopMusic() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        document.getElementById('playButton').style.display = 'inline-block';
        document.getElementById('stopButton').style.display = 'none';
        alert("The birthday song has been stopped.");
    }
}

document.getElementById('birthdayForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input').value;
    const message = this.querySelector('textarea').value;
    const messageOutput = document.getElementById('messageOutput');

    messageOutput.innerHTML = `Thank you, ${name}! Your message: "${message}" has been sent.`;
    
    // Clear form
    this.reset();
    alert("Your message has been sent successfully!");
});

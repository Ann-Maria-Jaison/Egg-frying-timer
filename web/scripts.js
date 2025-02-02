let timeLeft = 3 * 60 * 1000; // 3 minutes in milliseconds

function updateTimer() {
    if (timeLeft <= 0) {
        document.getElementById("timer").textContent = "00:00:000";
        document.getElementById("message").style.display = "block"; // Show the message
        document.getElementById("gifContainer").style.display = "block"; // Show the GIF
    } else {
        let minutes = Math.floor(timeLeft / 60000);
        let seconds = Math.floor((timeLeft % 60000) / 1000);
        let milliseconds = timeLeft % 1000;

        // Formatting to ensure 2-digit seconds and 3-digit milliseconds
        let formattedTime = 
            String(minutes).padStart(2, '0') + ":" + 
            String(seconds).padStart(2, '0') + ":" + 
            String(milliseconds).padStart(3, '0');

        document.getElementById("timer").textContent = formattedTime;

        timeLeft -= 10; // Decrease time by 10 milliseconds
        setTimeout(updateTimer, 10);
    }
}

updateTimer(); // Start the countdown

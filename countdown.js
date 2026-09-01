let count = 3;

const countdownText = document.getElementById("countdown");

function startCountdown() {

    countdownText.textContent = count;

    if (count === 0) {window.location.href = "birthday-room.html";

        return;
    }

    count--;

    setTimeout(startCountdown, 1000);
}

startCountdown();
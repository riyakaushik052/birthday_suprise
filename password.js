const correctPassword = "2092005";

function checkPassword() {

    const input =
        document.getElementById("passwordInput").value;

    const message =
        document.getElementById("message");

    if (input === correctPassword) {

        message.innerHTML = "✨ Correct! The door is opening... ❤️";

        message.style.color = "#e83e73";

        setTimeout(function() {

            window.location.href = "countdown.html";

        }, 1200);

    } else {

        message.innerHTML =
            "Oops! That's not the secret key 😜💗";

        message.style.color = "#e83e73";

    }
}

const breakBtn = document.getElementById("breakBtn");

const progress = document.getElementById("progress");

const statusText = document.getElementById("status");

const finalMessage = document.getElementById("finalMessage");


breakBtn.addEventListener("click", function () {

    breakBtn.disabled = true;

    breakBtn.innerHTML = "🔥 Breaking Firewall...";

    let value = 0;


    const firewall = setInterval(function () {

        value += 2;

        progress.style.width = value + "%";


        if (value < 30) {

            statusText.innerHTML =
                "🔍 Scanning security...";

        }

        else if (value < 60) {

            statusText.innerHTML =
                "💻 Finding a way through...";

        }

        else if (value < 90) {

            statusText.innerHTML =
                "❤️ Almost there...";

        }

        else {

            statusText.innerHTML =
                "✨ Final surprise unlocked!";

        }


        if (value >= 100) {

            clearInterval(firewall);

            setTimeout(function () {

                document.querySelector(".firewallScreen")
                    .style.display = "none";

                finalMessage.classList.add("show");

            }, 700);

        }

    }, 60);

});
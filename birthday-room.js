// =================================
// BIRTHDAY ROOM
// =================================

console.log("🎂 Birthday Room Loaded ❤️");


const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const candleMessage = document.getElementById("candleMessage");

let candleBlown = false;


// =================================
// CANDLE BLOWING
// =================================

candle.addEventListener("click", function () {

    if (candleBlown) return;

    candleBlown = true;


    // Turn off flame

    flame.classList.add("blown");


    // Smoke effect

    const smoke = document.createElement("div");

    smoke.className = "smoke";

    smoke.innerHTML = "💨";

    candle.appendChild(smoke);


    // Change message

    candleMessage.innerHTML =
        "🎉 Wish made! The candle is blown! ❤️";


    // Celebration

    createConfetti();


    // After celebration unlock cake

    setTimeout(function () {

        candleMessage.innerHTML =
            "🎂 Now let's cut the cake! 🔪";

    }, 2000);

});


// =================================
// CONFETTI
// =================================

function createConfetti() {

    for (let i = 0; i < 25; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            ["🎉", "✨", "💕", "🎊"][Math.floor(Math.random() * 4)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "100";

        document.body.appendChild(confetti);


        const fall = confetti.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,

                    opacity: 0
                }
            ],

            {
                duration: 2000 + Math.random() * 1500,

                easing: "ease-out"
            }

        );


        fall.onfinish = function () {
            confetti.remove();
        };

    }

}// =================================
// CAKE CUTTING
// =================================

const knife = document.getElementById("knife");
const cake = document.getElementById("cake");
const cakeMessage = document.getElementById("cakeMessage");

let cakeCut = false;


// Show knife instruction after candle

setTimeout(function () {

    if (candleBlown) {

        cakeMessage.style.display = "block";

    }

}, 2200);


// Knife click

knife.addEventListener("click", function () {

    if (!candleBlown) {

        candleMessage.innerHTML =
            "🕯️ Blow the candle first! ❤️";

        return;
    }

    if (cakeCut) return;

    cakeCut = true;

    knife.classList.add("cut");

    cake.classList.add("cutCake");

    cakeMessage.innerHTML =
        "🎂 Cake Cut! 🎉❤️";

    createConfetti();

    setTimeout(function () {

        knife.style.opacity = "0.4";

        cakeMessage.innerHTML =
    "🎉 Birthday celebration complete! ❤️";



    window.location.href = "firewall.html";

}, 2500);

});
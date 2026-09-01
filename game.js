// =========================
// GAME.JS
// =========================

let score = 0;
let time = 20;
let gameRunning = false;
let heartInterval;
let timerInterval;

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const gameArea = document.getElementById("gameArea");
const startScreen = document.getElementById("startScreen");
const victory = document.getElementById("victory");

// Start Game
function startGame(){

    startScreen.style.display = "none";
    victory.style.display = "none";

    gameRunning = true;

    heartInterval = setInterval(createHeart, 700);

    timerInterval = setInterval(function(){

        time--;
        timeText.innerHTML = time;

        if(time <= 0){

            clearInterval(timerInterval);
            clearInterval(heartInterval);

            gameRunning = false;

            document.querySelectorAll(".heart").forEach(h=>{
                h.remove();
            });

            if(score >= 15){

                victory.style.display = "block";

            }else{

                alert("💔 You Lost! Try Again.");
                location.reload();

            }

        }

    },1000);

}


// Create Heart
function createHeart(){

    if(!gameRunning) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    const good = Math.random() > 0.3;

    heart.innerHTML = good ? "❤️" : "💔";

    heart.style.left = Math.random() * 90 + "vw";
    heart.style.top = "-50px";

    gameArea.appendChild(heart);

    let position = -50;

    const fall = setInterval(function(){

        position += 5;

        heart.style.top = position + "px";

        if(position > window.innerHeight){

            clearInterval(fall);
            heart.remove();

        }

    },30);


    heart.onclick = function(){

        if(good){

            score++;

        }else{

            score--;

        }

        scoreText.innerHTML = score;

        clearInterval(fall);
        heart.remove();

    };

}
function nextPage(){

    victory.style.display = "none";

    gameArea.style.display = "none";

    document.querySelector(".topBar").style.display = "none";

    document.getElementById("letterScreen").style.display = "flex";

}// =========================
// LETTER → PASSWORD
// =========================

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.addEventListener("click", function() {

        window.location.href = "password.html";

    });

}

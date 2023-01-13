const diceStageEL = document.getElementById("dice-stage");
const buttonEl = document.getElementById("button-el");
let dicePictures = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

buttonEl.addEventListener("click", function () {
    diceStageEL.innerHTML = `<img src=" ${dicePictures[Math.floor(Math.random() * 6)]}">`
})



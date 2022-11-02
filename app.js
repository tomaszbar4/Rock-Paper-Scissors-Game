const playerPointsSpan = document.querySelector('.player-points');
const compPointsSpan = document.querySelector('.comp-points');
const optionsButtons = document.querySelectorAll('main button');
const playerChoiceSpan = document.querySelector('.player-choice');
const compChoiceSpan = document.querySelector('.comp-choice');
const resultText = document.querySelector('.results-text');
const resetGameButton = document.querySelector('.reset-game');
const choicesSection = document.querySelector('.choices');

let playerPoints = 0;
let playerChoice = '';

let compPoints = 0;
let compChoice = '';

function setGame() {
    playerPointsSpan.textContent = playerPoints;
    compPointsSpan.textContent = compPoints;
}

window.onload = setGame();

function playerSelect(event) {
    optionsButtons.forEach(button => button.classList.remove('active'));
    playerChoice = event.target.dataset.option;
    event.target.classList.add('active');
    compSelect();
}

const availableCompChoices = ['rock', 'paper', 'scissors'];

function checkResult() {
    let winner = '';
    if (playerChoice === compChoice) {
        console.log("It's a tie!");
        winner = "It's a tie!";
        resultText.style.color = 'yellow';
    }
    else if (playerChoice === 'rock' && compChoice === 'paper' || playerChoice === 'paper' && compChoice === 'scissors' || playerChoice === 'scissors' && compChoice === 'rock') {
        winner = 'You lost!';
        compPoints++;
        compPointsSpan.textContent = compPoints;
        resultText.style.color = 'red';
    }
    else {
        winner = 'You won!';
        playerPoints++;
        playerPointsSpan.textContent = playerPoints;
        resultText.style.color = 'green';
    }
    console.log(playerChoice + compChoice);
    console.log(winner);
    choicesSection.classList.add('active');
    resultText.textContent = winner;
    playerChoiceSpan.textContent = playerChoice;
    compChoiceSpan.textContent = compChoice;
}

function compSelect() {
    const randomIndex = Math.floor(Math.random() * 3)
    compChoice = availableCompChoices[randomIndex];
    checkResult();
}

optionsButtons.forEach(button => button.addEventListener('click', playerSelect))

resetGameButton.addEventListener('click', () => {
    playerPoints = 0;
    compPoints = 0;
    compPointsSpan.textContent = compPoints;
    playerPointsSpan.textContent = playerPoints;
    resultText.textContent = 'Choose your weapon to start game!';
    choicesSection.classList.remove('active');
    optionsButtons.forEach(button => button.classList.remove('active'));
    resultText.style.color = 'white';
})



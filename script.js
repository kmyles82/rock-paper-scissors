function computerPlay() {
    random_num = Math.floor(Math.random() * 3)
    if (random_num === 0) {
        return "rock"
    } else if (random_num === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"
    } else if (computerSelection === 'paper') {
        return "You Lose! Paper beats Rock"
    } else {
        return "You Win! Rock beats Scissors"
    }
}

const playerSelection = 'rock'
const computerSelection = computerPlay()

console.log(playRound(playerSelection,computerSelection))
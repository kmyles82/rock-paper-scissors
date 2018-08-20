function computerPlay() {
    let random_num = Math.floor(Math.random() * 3)
    if (random_num === 0) {
        return "rock"
    } else if (random_num === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playerPlay() {
    let random_num = Math.floor(Math.random() * 3)
    if (random_num === 0) {
        return "rock"
    } else if (random_num === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        console.log( "It's a tie")
        return null
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log( "You Lose! Paper beats Rock")
        return false
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log( "You Win! Rock beats Scissors")
        return true
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log( "You Win! Paper beats Rock")
        return true
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log( "You Lose! Scissors beats Paper")
        return false
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log( "You Win! Scissors beats Paper")
        return true
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log( "You Lose! Rock beats Scissors")
        return false
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (var i = 0; i < 5; i++){
        let playerSelection = prompt("What is your roll?")
        let computerSelection = computerPlay()

        console.log(playerSelection)
        console.log(computerSelection)
        
        if (playRound(playerSelection, computerSelection) === null) {
            playerScore = playerScore
        }
        else if (playRound(playerSelection, computerSelection)) {
            playerScore += 1
            
        } else {
            computerScore += 1
        } 
    }

    if (playerScore > computerScore) {
        return "Player is the winner with the score of " + playerScore + " vs the Computer score of " + computerScore
    } else {
        return "Computer is the winner with the score of " + computerScore + " vs the Player score of " + playerScore 
    }
}




// console.log(playRound(playerSelection,computerSelection))
console.log(game())
console.log("---------------------")
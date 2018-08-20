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


var playerScore = 0;
var enemyScore = 0;

function game(playerChoice) {
    let enemyChoiceNum = Math.random();
    let enemyChoice;
    let result;

    if (enemyChoiceNum < 1 / 3) {
        enemyChoice = "rock"
    } else if (enemyChoiceNum >= 1 / 3 && enemyChoiceNum < 2 / 3) {
        enemyChoice = "paper"
    } else {
        enemyChoice = "scissors"
    }

    if (playerChoice == enemyChoice) {
        result = "tie"
    } else if (playerChoice == "rock") {
        if (enemyChoice == "paper") {
            result = "loss"
        } else if (enemyChoice == "scissors") {
            result = "win"
        }
    } else if (playerChoice == "paper") {
        if (enemyChoice == "scissors") {
            result = "loss"
        } else if (enemyChoice == "rock") {
            result = "win"
        }
    } else if (playerChoice == "scissors") {
        if (enemyChoice == "rock") {
            result = "loss"
        } else if (enemyChoice == "paper") {
            result = "win"
        }
    } else {
        console.log("invalid choice")
    }
    if (playerScore < 3 && enemyScore < 3) {
        calcRes(result);
    }
}

function calcRes(result) {
    switch (result) {
        case "win":
            playerScore++;
            console.log("player won");
            break;
        case "loss":
            enemyScore++;
            console.log("enemy won");
            break;
        case "tie":
            console.log("it was a tie");
            break;
    }
    if (playerScore == 3) {
        console.log("Congrats, You've won the game!");
    } else if (enemyScore == 3) {
        console.log("You've lost the game, kys loser")
    }
}

function resetGame() {
    playerScore = 0;
    enemyScore = 0;
    console.clear();
}
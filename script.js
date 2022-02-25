let wins = 0;
let losses = 0;

function computerPlay() {
  const play = ["rock", "scissors", "paper"];
  let randomNumber = Math.floor(Math.random() * 3);
  const returnWord = play[randomNumber];
  return returnWord;
}


function playRound() {
  let computerSelection = computerPlay();
  console.log(computerSelection);
  let playerSelection = prompt("Choose how you will wipe the floor with your oppponent! Enter rock, scissors, or paper.", "word");
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection);

  if (computerSelection == playerSelection) {
    console.log("That's a tie!");
    return "That's a tie!";
  }

  if (computerSelection == "rock") {
    if (playerSelection == "paper") {
      console.log("You win! Paper beats rock!");
      wins++;
      return "You win! Paper beats rock!";
    }

    if (playerSelection == "scissors") {
      console.log("You lose! Rock beats scissors!");
      losses++;
      return "You lose! Rock beats scissors!";
    }

  } else if (computerSelection == "scissors") {
    if (playerSelection == "paper") {
      console.log("You lose! Scissors beat paper!");
      losses++;
      return "You lose! Scissors beat paper!";
    }

    if (playerSelection == "rock") {
      console.log("You win! Rock beats scissors!");
      wins++;
      return "You win! Rock beats scissors!";
    }

  } else { //computerSelection === "paper" 
    if (playerSelection == "rock") {
      console.log("You lose! Paper beats rock!");
      losses++;
      return "You lose! Paper beats rock!";
    }

    if (playerSelection == "scissors") {
      console.log("You win! Scissors beat paper!");
      wins++;
      return "You win! Scissors beat paper!";
    }
  }
  console.log("Oops! You didn't type in \"rock\", \"scissors\" or \"paper\". Please check your spelling and try again.");
  return false;
}


/*function game() {
  wins = 0;
  losses = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (wins == losses) {
    console.log("Game Over! That's a tie!");
  } else if (wins > losses) {
    console.log("Game over! You win!");
  } else {
    console.log("Game over! You lose!");
  }
}

game();
/*



// declare global variables 
// - note: course module on AVOIDING global variables follows this module
let wins = 0;
let losses = 0;
let roundsPlayed = 0;
let resultsDivRef = document.getElementById('results');
let playerScoreElem = document.querySelector('.player_score');
let binkyScoreElem = document.querySelector('.binky_score');

//returns Binky's random word, adds glow to corresponding button
// called in playRound(); 
 computerPlay = () => {
  const play = ["rock", "scissors", "paper"];
  play.forEach(unGlow);
  let randomNumber = Math.floor(Math.random() * 3);
  const returnWord = play[randomNumber];
  const binkyClass = '.binky' + returnWord;
  const binkyChoice = document.querySelector(binkyClass);
  binkyChoice.classList.add('glow');
  return returnWord;
}

// removes glow from corresponding Binky button 
unGlow = (item) => {
  let binkybtn = document.querySelector('.binky' + item);
  binkybtn.classList.remove('glow');
}

// allows reuse existing code PlayRound() 
// by now hardcoding a string for each player button 
// displays playerSelection & score 
const playerrock = document.querySelector('#playerrock');
playerrock.addEventListener('click', () => {
  let playerSelection_obj = playRound('rock');
  let finalResult = finishGame();
  resultsDivRef.textContent = playerSelection_obj.message + ' ' + finalResult;
  playerScoreElem.textContent = playerSelection_obj.wins;
  binkyScoreElem.textContent = playerSelection_obj.losses;
  console.log(playerSelection_obj);
  return playerSelection_obj.message;
});

const playerpaper = document.querySelector('#playerpaper');
playerpaper.addEventListener('click', () => {
  let playerSelection_obj = playRound('paper');
  let finalResult = finishGame();
  resultsDivRef.textContent = playerSelection_obj.message + ' ' + finalResult;
  playerScoreElem.textContent = playerSelection_obj.wins;
  binkyScoreElem.textContent = playerSelection_obj.losses;
  console.log(playerSelection_obj);
  return playerSelection_obj.message;
});

const playerscissors = document.querySelector('#playerscissors');
playerscissors.addEventListener('click', () => {
  let playerSelection_obj = playRound('scissors');
  let finalResult = finishGame();
  resultsDivRef.textContent = playerSelection_obj.message + ' ' + finalResult;
  playerScoreElem.textContent = playerSelection_obj.wins;
  binkyScoreElem.textContent = playerSelection_obj.losses;
  console.log(playerSelection_obj);
  return playerSelection_obj.message;
});

//restart game by reloading page
const restartButton = document.querySelector('.restart button');
restartButton.addEventListener('click', () => { 
location.reload();
});

// displays win or lose after 5 rounds 
const finishGame = () => {
  if (roundsPlayed == 5) {
    let theButtons = document.querySelector('.buttons');
    theButtons.style.display = 'none';
    let binkyButtons = document.querySelector('.binkybtn');
    binkyButtons.style.display = 'none';
    let theRestart= document.querySelector('.restart');
    theRestart.style.display = 'block';
    
    if (wins == losses) {
      console.log("Game Over! That's a tie!");
      return ("Game Over! That's a tie!");
    } else if (wins > losses) {
      console.log("Game over! You win!");
      return ("Game over! You win!");
    } else {
      console.log("Game over! You lose!");
      return ("Game over! You lose!");
    }
  } else {
    return ' ';
  }
}

// plays 1 round, displays win or lose 
function playRound(playerSelection) {
  let computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playerSelection);

// create object
  if (computerSelection == playerSelection) {
    console.log("That's a tie!");
    roundsPlayed++;
    return {
      	message: "That's a tie!",
        wins: wins,
        losses: losses,
        roundsPlayed: roundsPlayed
      };
  }

  if (computerSelection == "rock") {
    if (playerSelection == "paper") {
      console.log("You win! Paper beats rock!");
      wins++;
      roundsPlayed++;
      return {
      	message: 'You win! Paper beats rock!',
        wins: wins,
        losses: losses,
        roundsPlayed: roundsPlayed
      };
    }

    if (playerSelection == "scissors") {
      console.log("You lose! Rock beats scissors!");
      losses++;
      roundsPlayed++;
      return {
      	message: 'You lose! Rock beats scissors!',
        wins: wins,
        losses: losses,
        roundsPlayed: roundsPlayed
      };
    }

  } else if (computerSelection == "scissors") {
    if (playerSelection == "paper") {
      console.log("You lose! Scissors beat paper!");
      losses++;
      roundsPlayed++;
      return {
      	message: 'You lose! Scissors beat paper!',
        wins: wins,
        losses: losses,
        roundsPlayed: roundsPlayed
      };
    }

    if (playerSelection == "rock") {
      console.log("You win! Rock beats scissors!");
      wins++;
      roundsPlayed++;
      return {
      	message: 'You win! Rock beats scissors!',
        wins: wins,
        losses: losses,
        roundsPlayed: roundsPlayed
      };
    }

  } else { //computerSelection === "paper" 
    if (playerSelection == "rock") {
      console.log("You lose! Paper beats rock!");
      losses++;
      roundsPlayed++;
      return {
      	message: 'You lose! Paper beats rock!',
        wins: wins,
        losses: losses,
        roundsPlayed: roundsPlayed
      };
    }

    if (playerSelection == "scissors") {
      console.log("You win! Scissors beat paper!");
      wins++;
      roundsPlayed++;
      return {
      	message: 'You win! Scissors beat paper!',
        wins: wins,
        losses: losses,
        roundsPlayed: roundsPlayed
      };
    }
  }
}

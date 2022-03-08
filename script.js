// declare global variables
let wins = 0;
let losses = 0;
let roundsPlayed = 0;
let resultsDivRef = document.getElementById('results');


//returns random word, called in playRound();
// highlights 'Binky's chosen button' 
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

// removes action of line 17 prevents highlight 'sticking'
unGlow = (item) => {
  let binkybtn = document.querySelector('.binky' + item);
  binkybtn.classList.remove('glow');
}

// allows reuse existing code PlayRound() 
//by hardcoding a string for each button 
// and displays playerSelection 
const playerrock = document.querySelector('#playerrock');
playerrock.addEventListener('click', () => {
  let playerSelection = playRound('rock');
  let finalResult = finishGame();
  resultsDivRef.textContent = playerSelection + ' ' + finalResult;
  return playerSelection;
});

const playerpaper = document.querySelector('#playerpaper');
playerpaper.addEventListener('click', () => {
  let playerSelection = playRound('paper');
  let finalResult = finishGame();
  resultsDivRef.textContent = playerSelection + ' ' + finalResult;
  return playerSelection;
});

const playerscissors = document.querySelector('#playerscissors');
playerscissors.addEventListener('click', () => {
  let playerSelection = playRound('scissors');
  let finalResult = finishGame();
  resultsDivRef.textContent = playerSelection + ' ' + finalResult;

  return playerSelection;
});

const restartButton = document.querySelector('.restart button');
restartButton.addEventListener('click', () => {
  location.reload();
});

const finishGame = () => {
  if (roundsPlayed == 5) {
    let theButtons = document.querySelector('.buttons');
    theButtons.style.display = "none";
    let binkyButtons = document.querySelector('.binkybtn');
    binkyButtons.style.display = 'none';
    let theRestart = document.querySelector('.restart');
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

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playerSelection);


  if (computerSelection == playerSelection) {
    console.log("That's a tie!");
    roundsPlayed++;
    return "That's a tie! Meh.";
  }

  if (computerSelection == "rock") {
    if (playerSelection == "paper") {
      console.log("You win! Paper beats rock!");
      wins++;
      roundsPlayed++;
      return "You win! Your paper beats Binky's rock!";
    }

    if (playerSelection == "scissors") {
      console.log("You lose! Rock beats scissors!");
      losses++;
      roundsPlayed++;
      return "You lose! Binky's rock beat your scissors!";
    }

  } else if (computerSelection == "scissors") {
    if (playerSelection == "paper") {
      console.log("You lose! Scissors beat paper!");
      losses++;
      roundsPlayed++;
      return "You lose! Binky's scissors beat your paper!";
    }

    if (playerSelection == "rock") {
      console.log("You win! Rock beats scissors!");
      wins++;
      roundsPlayed++;
      return "You win! Your rock beats Binky's scissors!";
    }

  } else { //computerSelection === "paper" 
    if (playerSelection == "rock") {
      console.log("You lose! Rock beats paper!");
      losses++;
      roundsPlayed++;
      return "You lose! Binky's paper beats your rock!";
    }

    if (playerSelection == "scissors") {
      console.log("You win! Scissors beat paper!");
      wins++;
      roundsPlayed++;
      return "You win! Your scissors beat Binky's paper!";
    }
  }
}

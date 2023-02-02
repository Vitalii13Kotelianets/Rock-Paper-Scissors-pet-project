const startGameBtn = document.getElementById('start-game-btn');

const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const DEFAULT_USER_CHOICE = rock;
const PLAYER_WINS = 'Player win';
const COMPUTER_WINS = 'Computer win';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${rock} , ${paper} or ${scissors}`,
    ''
  ).toUpperCase();

  if (
    (selection !== rock && selection !== paper && selection !== scissors) ||
    selection === ''
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return rock;
  } else if (randomValue < 0.67) {
    return paper;
  } else {
    return scissors;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === rock && pChoice === paper) ||
      (cChoice === paper && pChoice === scissors) ||
      (cChoice === scissors && pChoice === rock)
    ? PLAYER_WINS
    : COMPUTER_WINS;

//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === rock && pChoice === paper) ||
//     (cChoice === paper && pChoice === scissors) ||
//     (cChoice === scissors && pChoice === rock)
//   ) {
//     return PLAYER_WINS;
//   } else {
//     return COMPUTER_WINS;
//   }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting ...');
  const playerChoice = getPlayerChoice();
  console.log('Player chose ' + playerChoice);
  const computerChoice = getComputerChoice();
  console.log('Computer chose ' + computerChoice);
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice} , therefore `;
  if (winner === RESULT_DRAW) {
    message += 'you had a draw';
  } else if (winner === PLAYER_WINS) {
    message += 'you won';
  } else {
    message += 'computer won';
  }
  alert(message);
  gameIsRunning = false;
});

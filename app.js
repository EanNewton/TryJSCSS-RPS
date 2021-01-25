let userScore = 0;
let compScore = 0;
const smallUserTag = 'user'.fontsize(3).sup();
const smallCompTag = 'comp'.fontsize(3).sup();
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoad_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * 3)]
}

function converToWord(letter) {
  if (letter == 'r') return 'Rock';
  if (letter == 'p') return 'Paper';
  return 'Scissors';
}

function win(user, comp){
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${converToWord(user)}${smallUserTag} beats ${converToWord(comp)}${smallCompTag}`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 250);
}

function lose(user, comp) {
  const userChoice_div = document.getElementById(user);
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${converToWord(user)}${smallUserTag} loses to ${converToWord(comp)}${smallCompTag}`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 250);
}

function draw(user, comp) {
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${converToWord(user)}${smallUserTag} draws with ${converToWord(comp)}${smallCompTag}`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(function() { userChoice_div.classList.remove('grey-glow')}, 250);

}

function game(userChoice) {
  const compChoice = getCompChoice()
  switch (userChoice + compChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, compChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, compChoice);
      break;
    default:
      draw(userChoice, compChoice);
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game('r');
  })

  paper_div.addEventListener('click', function() {
    game('p');
  })

  scissors_div.addEventListener('click', function() {
    game('s');
  })
}

main();

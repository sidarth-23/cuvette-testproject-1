// Using localStorage
localStorage.setItem('userScore', '0');
localStorage.setItem('compScore', '0');

// Setting json for rock, paper, scissor;
const data = {
  rock: {
    winning: "scissor",
    losing: "paper",
    "icon-img": '<i class="fa-solid fa-hand-fist fa-4x"></i>',
  },
  paper: {
    winning: "rock",
    losing: "scissor",
    "icon-img": '<i class="fa-solid fa-hand fa-4x"></i>',
  },
  scissor: {
    winning: "paper",
    losing: "rock",
    "icon-img": '<i class="fa-solid fa-hand-peace fa-4x"></i>',
  },
}

// Elements selected
const body = document.querySelector("body")
const playingBody = document.querySelector(".main-body")
const results = document.querySelector('.results');
const scoreUser = document.querySelector("#scored-user")
const scoreComp = document.querySelector("#scored-comp")
const userChoice = document.querySelectorAll(".choose-button")
const playAgain = document.querySelector(".reset-btn")
const popup = document.querySelector(".popup")
const popupExit = document.querySelector(".exit-btn")
const rulesBtn = document.querySelector("#rules-btn")
const userAnswer = document.getElementsByClassName("user-pick")
const compAnswer = document.getElementsByClassName("comp-pick")

// Checking functions
// const checkWinner = (user, comp) => {

// }

// Components of page
const popupTxt = `<div class="popup">
      <button class="exit-btn">X</button>
      <div class="rules-content">
        <h2>Game Rules</h2>
        <ul>
          <li>
            Rock beats scissors, scissors beat paper, and paper beats rock.
          </li>
          <li>
            Agree ahead of time whether you’ll count off “rock, paper, scissors,
            shoot” or just “rock, paper, scissors.”
          </li>
          <li>
            Use rock, paper, scissors to settle minor decisions or simply play
            to pass the time
          </li>
          <li>
            If both players lay down the same hand, each player lays down
            another hand
          </li>
        </ul>
      </div>
    </div>`
    
const resultsPageContent = (winner) => {
  let winnerTag = "";
  let winText = "Tie";
  let isHidden = '';
  if (winner === "comp") {
    winnerTag = "winner-comp";
    winText = "Lose";
  } else if (winner === 'user') {
    winnerTag = 'winner-user';
    winText = 'Win';
  }

  return `      <div class="results">
        <div class="winner ${winnerTag}">
          <div class="winner-c1">
            <div class="winner-c2"></div>
          </div>
        </div>
        <div class="pick user-pick scissor">
          <p>You picked</p>
          <i class="fa-solid fa-hand-peace fa-4x"></i>
        </div>
        <div class="pick-result">
          <h2>
            You <span class="conclude">${winText}</span>
          </h2>
          <p class="${isHidden}">Against Pc</p>
          <button class="reset-btn">Play Again</button>
        </div>
        <div class="pick comp-pick rock">
          <p>Pc Picked</p>
          <i class="fa-solid fa-hand-fist fa-4x"></i>
        </div>
      </div>`
}


// Button events
rulesBtn.addEventListener("click", function (e) {
  e.preventDefault()
  playingBody.insertAdjacentHTML("beforeend", popupTxt)
})
body.addEventListener("click", function (e) {
  if (e.target.classList.contains("exit-btn")) {
    e.preventDefault()
    const popup = document.querySelector(".popup")
    if (popup) {
      popup.remove()
    }
  }
})

// Using localStorage
const storedUserScore = localStorage.getItem("userScore")
  ? localStorage.getItem("userScore")
  : localStorage.setItem("userScore", "0")
const storedCompScore = localStorage.getItem("compScore")
  ? localStorage.getItem("compScore")
  : localStorage.setItem("compScore", "0")
const body = document.querySelector("body")

// Setting json for rock, paper, scissor;
const data = {
  rock: {
    winning: "scissor",
    losing: "paper",
    iconImg: '<i class="fa-solid fa-hand-fist fa-4x"></i>',
  },
  paper: {
    winning: "rock",
    losing: "scissor",
    iconImg: '<i class="fa-solid fa-hand fa-4x"></i>',
  },
  scissor: {
    winning: "paper",
    losing: "rock",
    iconImg: '<i class="fa-solid fa-hand-peace fa-4x"></i>',
  },
}

// Checking functions
const pcChoiceArray = ["rock", "paper", "scissor"]
const checkWinner = (user, comp) => {
  if (data[user].winning === comp) {
    return {
      winnerTag: "winner-user",
      winText: "Win",
      isHidden: "",
    }
  } else if (user === comp) {
    return {
      winnerTag: "",
      winText: "Tied",
      isHidden: "hidden",
    }
  }
  return {
    winnerTag: "winner-comp",
    winText: "Lose",
    isHidden: "",
  }
}

// Components of page
const mainpageTxt = () => {
  return `<div class="main-body">
      <header>
        <div class="title">
          <h1>Rock <br />Paper <br />Scissors</h1>
        </div>
        <div class="score-board">
          <div class="score-tag">
            <p class="score-player">Computer <br />Score</p>
            <p class="score-number scored-comp" id="scored-comp">${localStorage.getItem(
              "compScore"
            )}</p>
          </div>
          <div class="score-tag">
            <p class="score-player">Your <br />Score</p>
            <p class="score-number scored-user" id="scored-user">${localStorage.getItem(
              "userScore"
            )}</p>
          </div>
        </div>
      </header>
            <main>
        </main>
              <footer>
        <div class="footer-container">
          <button class="footer-btn rules-btn" id="rules-btn">Rules</button>
        </div>
      </footer>`
}

const endPageTxt = `    <div class="main-body">
      <div class="img-container">
        <img src="assets/prize-icon.svg" alt="Prize" class="prize" />
        <img src="assets/star-icon.svg" alt="Star" class="star-1" />
        <img src="assets/star-icon.svg" alt="Star" class="star-2" />
        <img src="assets/star-icon.svg" alt="Star" class="star-3" />
        <img src="assets/star-icon.svg" alt="Star" class="star-4" />
        <img src="assets/star-icon.svg" alt="Star" class="star-5" />
        <img src="assets/star-icon.svg" alt="Star" class="star-6" />
        <img src="assets/star-icon.svg" alt="Star" class="star-7" />
        <img src="assets/star-icon.svg" alt="Star" class="star-8" />
      </div>
      <div class="won-end">
        <h2>Hurray!!</h2>
        <p>You won the game</p>
      </div>
      <button class="win-reset-btn">Play Again</button>
      <div class="footer-container">
        <button class="footer-btn rules-btn" id="rules-btn">Rules</button>
      </div>
    </div>`

const optionTxt = `<div class="main-container page-1">
          <div class="choose-option">
            <div class="options-bg">
              <img src="assets/Simple_triangle.svg" alt="" />
            </div>
            <div class="choose-buttons">
              <button class="choose-button rock" id="rock">
                <i class="fa-solid fa-hand-fist fa-4x"></i>
              </button>
              <button class="choose-button paper" id="paper">
                <i class="fa-solid fa-hand fa-4x"></i>
              </button>
              <button class="choose-button scissor" id="scissor">
                <i class="fa-solid fa-hand-peace fa-4x"></i>
              </button>
            </div>
          </div>
        </div>`

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

const playAgainBtn = `<button class="reset-btn">Play Again</button>`

const resetBtnContainer = `<div class="footer-container">
          <button class="footer-btn rules-btn" id="rules-btn">Rules</button>
        </div>`

const nextBtnTxt = `<button class="footer-btn next-btn" id="next-btn">Next</button>`

const resultsPageContent = (userAns, pcAns, winner) => {
  const tempWin = winner

  return `<div class="main-container page-2">
  <div class="results">
        <div class="winner ${tempWin.winnerTag} ${tempWin.isHidden}">
          <div class="winner-c1">
            <div class="winner-c2"></div>
          </div>
        </div>
        <div class="pick user-pick scissor">
          <p>You picked</p>
          ${data[userAns].iconImg}
        </div>
        <div class="pick-result">
          <h2>
            You <span class="conclude">${tempWin.winText}</span>
          </h2>
          <p class="${tempWin.isHidden}">Against Pc</p>
          <button class="reset-btn">Play Again</button>
        </div>
        <div class="pick comp-pick rock">
          <p>Pc Picked</p>
          ${data[pcAns].iconImg}
        </div>
      </div>
      </div>`
}


// Rendering functions
function initialPageRender() {
  const mainpage = document.querySelector(".main-body")
  if (mainpage) {
    mainpage.remove()
  }
  body.insertAdjacentHTML("afterbegin", mainpageTxt())
  document.querySelector("main").insertAdjacentHTML("afterbegin", optionTxt)
}

function resultsPageRender(resultsPageText) {
  document.querySelector(".page-1").remove()
  document
    .querySelector("main")
    .insertAdjacentHTML("afterbegin", resultsPageText)
  document
    .querySelector(".footer-container")
    .insertAdjacentHTML("beforeend", nextBtnTxt)
}

function resetRender() {
  document.querySelector(".page-2").remove()
  document.querySelector("main").insertAdjacentHTML("beforeend", optionTxt)
  const nextBtn = document.querySelector(".next-btn")
  nextBtn.remove()
}

function nextWinner(winCheck) {
  if (winCheck.winText === "Win") {
    localStorage.setItem(
      "userScore",
      String(Number(localStorage.getItem("userScore")) + 1)
    )
    document.querySelector(".main-body").remove()
    body.insertAdjacentHTML("afterbegin", endPageTxt)
  } else if (winCheck.winText === "Lose") {
    localStorage.setItem(
      "compScore",
      String(Number(localStorage.getItem("compScore")) + 1)
    )
    resetRender()
    document.querySelector("#scored-user").textContent =
      localStorage.getItem("userScore")
    document.querySelector("#scored-comp").textContent =
      localStorage.getItem("compScore")
  } else {
    resetRender()
    document.querySelector("#scored-user").textContent =
      localStorage.getItem("userScore")
    document.querySelector("#scored-comp").textContent =
      localStorage.getItem("compScore")
  }
}

initialPageRender()

// Elements selected
const mainBody = document.getElementsByClassName("main-body")[0]
const scoreUser = document.getElementsByClassName("scored-user")[0]
const scoreComp = document.getElementsByClassName("scored-comp")[0]

const footerContainer = document.getElementsByClassName("footer-container")[0]

// Button events
let winnerCheck

body.addEventListener("click", function (e) {
  e.preventDefault()
  let userSelect, compSelect, resultPage

  if (e.target.classList.contains("rules-btn")) {
    document
      .querySelector(".main-body")
      .insertAdjacentHTML("beforeend", popupTxt)
  }

  if (e.target.classList.contains("exit-btn")) {
    const popup = document.querySelector(".popup")
    if (popup) {
      popup.remove()
    }
  }

  if (
    e.target.classList.contains("choose-button") ||
    e.target.closest("button").classList.contains("choose-button")
  ) {
    userSelect = e.target.closest("button").getAttribute("id")
    compSelect = pcChoiceArray[Math.floor(Math.random() * 3)]
    winnerCheck = checkWinner(userSelect, compSelect)
    scoreUser.textContent = localStorage.getItem("userScore")
    scoreComp.textContent = localStorage.getItem("compScore")
    resultPage = resultsPageContent(userSelect, compSelect, winnerCheck)
    resultsPageRender(resultPage)
  }

  if (e.target.classList.contains("reset-btn")) {
    resetRender()
  }
  if (e.target.classList.contains("next-btn")) {
    nextWinner(winnerCheck)
  }
  if (e.target.classList.contains("win-reset-btn")) {
    initialPageRender()
  }
})

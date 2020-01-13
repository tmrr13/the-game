const nominalCards = ['6', '7', '8', '9', '0', 'A', 'J', 'K', 'Q'];
const shirt = 'deck/cat.jpg';
const suitCards = ['H', 'S', 'C', 'D'];

let btnEditUserID;
// let btnModalCloseID;
let btnRestartID;
let btnSaveUserID;
let btnStartGameID;
let difficultySelectionFieldID;
// let gameDurationID;
let startGameModalID;
let playingTableID;
let scoreboardGameID;
let userNameID;
let userRegistrationFieldID;
let userRegistrationNameID;
let gameBannerID;
let controlFormID;
let modalTitleID;
// let timerID;
// let timerSetInterval;

let timerGame;
let storageCards = [];
let distributionOfCards = [];
let resultDrawOfCards = [];
let scoreGame = 0;
let selectedCard = null;
let cards = [];
let storageCardsCounter = 0;
let durationGame;

function generateCards(nominals, suits, numberOfCards) {
  let i = numberOfCards;
  while (i) {
    const nominalRandom = nominals[Math.floor(Math.random() * nominals.length)];
    const suitRandom = suits[Math.floor(Math.random() * suits.length)];
    const resultCard = nominalRandom + suitRandom;
    if (cards.indexOf(resultCard) === -1) {
      cards.push(resultCard);
      i--;
    }
  }
  return cards;
}

function shuffle(arr) {
  const copyArr = [...arr];
  const mergeArrays = [...copyArr, ...arr];
  let j, temp;
  for (let i = mergeArrays.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = mergeArrays[j];
    mergeArrays[j] = mergeArrays[i];
    mergeArrays[i] = temp;
  }

  return mergeArrays;
}

function gameCards(resultDrawOfCards) {
  let result = new DocumentFragment();
  for (let i = 0; i < resultDrawOfCards.length; i++) {
    const img = document.createElement('IMG');
    img.setAttribute('src', shirt);
    img.setAttribute('data-index', i);
    img.setAttribute('data-id', resultDrawOfCards[i]);
    result.append(img);
  }
  playingTableID.append(result);
}

//todo
// const CARD_CONSTANTS = {
//   img: 'IMG', // занести другие строки в константы
// };

function cardClick(e) {
  const target = e.target;
  let closeCard = target.classList.contains('discardedCards');
  const indexCard = +target.dataset.index;

  if (selectedCard === target || target.tagName !== 'IMG' || storageCards.length > 1 || closeCard) {
    return;
  }

  storageCards.push(target);

  const suitCard = resultDrawOfCards[indexCard];

  if (selectedCard) {
    const selectedCardIndex = +selectedCard.dataset.index;

    if (selectedCardIndex !== indexCard) {
      const selectedSuitCard = resultDrawOfCards[selectedCardIndex];
      target.setAttribute('src', deck[suitCard]);
      let testCard = selectedCard;
      if (selectedSuitCard !== suitCard) {
        storageCards = [];
        scoreGame -= 1;
        scoreboardGameID.innerHTML = `${scoreGame}`;
      } else {
        target.classList.add('discardedCards');
        testCard.classList.add('discardedCards');
        scoreGame += 2;
        storageCardsCounter++;
        scoreboardGameID.innerHTML = `${scoreGame}`;

        if (cards.length === storageCardsCounter) {
          restartGameModal(restartSuccessfulGame());
        }
      }
      selectedCard = null;

      if (storageCards.length === 2) {
        storageCards = [];
      }
      setTimeout(closeCards.bind(null, target, testCard), 500);
    }
  } else {
    selectedCard = target;
    target.setAttribute('src', deck[suitCard]);
  }
}

function closeCards(cardA, cardB) {
  cardA.setAttribute('src', shirt);
  cardB.setAttribute('src', shirt);
}

function saveUserName() {
  userRegistrationNameID.innerHTML = userRegistrationFieldID.value;
  if (userRegistrationFieldID.value === '') {
    userRegistrationNameID.innerHTML = 'User Name';
  }
}

function editUserName() {
  userRegistrationFieldID.value = '';
  userRegistrationNameID.innerHTML = 'User Name';
}

// function closeModal() {
//   open(location, '_self').close();
// }

function startGame() {
  durationGame = difficultySelectionFieldID.value * 60000;
  userNameID.innerHTML = userRegistrationNameID.innerHTML;
  gameBannerID.classList.remove('active');
  startGameModalID.classList.remove('active');
  timerGame = setTimeout(restartGameModal.bind(null, restartUnsuccessfulGame()), durationGame);
  // printNumbers(0, durationGame * 60);
}

function restartGameModal(fun) {
  gameBannerID.classList.add('active');
  startGameModalID.classList.add('active');
  fun;
}

function restartUnsuccessfulGame() {
  clearTimeout(timerGame);
  durationGame = difficultySelectionFieldID.value * 60000;
  controlFormID.classList.add('noActive');
  btnStartGameID.classList.add('noActive');
  btnRestartID.classList.remove('noActive');
  btnRestartID.classList.add('active');
  modalTitleID.innerHTML = 'Время Закончилось';
  // printNumbers(0, durationGame * 60);
}

function restartSuccessfulGame() {
  clearTimeout(timerGame);
  modalTitleID.innerHTML = `${'Игра закончена. Ваш счет ' + scoreGame}`;
}

// function printNumbers(from, to) {
//   let current = from;
//
//   function go() {
//     timerID.innerHTML = current;
//     if (current === to || cards.length === storageCardsCounter) {
//       clearInterval(timerSetInterval);
//     }
//     current++;
//   }
//
//   go();
//   timerSetInterval = setInterval(go, 1000);
// }


function restartGame() {
  gameBannerID.classList.remove('active');
  startGameModalID.classList.remove('active');
  playingTableID.innerHTML = '';
  clearTimeout(timerGame);
  timerGame = setTimeout(restartGameModal.bind(null, restartUnsuccessfulGame()), durationGame);

  // printNumbers(0, durationGame * 60);
  // setTimeout(restartGameModal.bind(null, restartUnsuccessfulGame()), durationGame);
  // clearInterval(timerSetInterval);

  scoreboardGameID.innerHTML = 0;
  scoreGame = 0;
  storageCards = [];
  distributionOfCards = [];
  resultDrawOfCards = [];
  scoreGame = 0;
  selectedCard = null;
  cards = [];
  storageCardsCounter = 0;
  onLoad();
}

function onLoad() {
  btnEditUserID = document.getElementById('btn-edit-user');
  // btnModalCloseID = document.getElementById('btn-modal-close');
  btnRestartID = document.getElementById('btn-restart');
  btnSaveUserID = document.getElementById('btn-save-user');
  btnStartGameID = document.getElementById('btn-start-game');
  difficultySelectionFieldID = document.getElementById('difficulty-selection');
  // gameDurationID = document.getElementById('game-duration');
  playingTableID = document.getElementById('playing-table');
  controlFormID = document.getElementById('control-form');
  scoreboardGameID = document.getElementById('scoreboard-game');
  startGameModalID = document.getElementById('game-modal');
  gameBannerID = document.getElementById('game-banner');
  userNameID = document.getElementById('user-name');
  userRegistrationFieldID = document.getElementById('user-registration-field');
  userRegistrationNameID = document.getElementById('user-registration-name');
  modalTitleID = document.getElementById('modal-title');
  // timerID = document.getElementById('timer');

  distributionOfCards = generateCards(nominalCards, suitCards, 2);
  resultDrawOfCards = shuffle(distributionOfCards);

  gameCards(resultDrawOfCards);

  playingTableID.addEventListener('click', cardClick);
  btnSaveUserID.addEventListener('click', saveUserName);
  btnEditUserID.addEventListener('click', editUserName);
  btnStartGameID.addEventListener('click', startGame);
  btnRestartID.addEventListener('click', restartGame);
  // btnModalCloseID.addEventListener('click', closeModal);
}


document.addEventListener('DOMContentLoaded', onLoad);






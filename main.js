// var deal = document.querySelector('.deal')
var playerA = document.querySelector('.playerA')
var playerB = document.querySelector('.playerB')
var scoreA = document.querySelector('.scoreA')
var scoreB = document.querySelector('.scoreB')

var deckA = [];
var deckB = [];
var handA = [];
var handB = [];

var cardA;
var carbB;

scoreA.innerHTML = 0
scoreB.innerHTML = 0

var deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
// var makeaDeck = function() {
  // var J = 11
  // var Q = 12
  // var K = 13
  // var A = 1
  // var numCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  // var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
  // var Hearts = numCards.map(function(num) {
  //   return num + ' of Hearts';
  // })
  // var Diamonds = numCards.map(function(num) {
  //   return num + ' of Diamonds';
  // })
  // var Spades = numCards.map(function(num) {
  //   return num + ' of Clubs';
  // })
  // var Clubs = numCards.map(function(num) {
  //   return num + ' of Spades';
  // })
  // var deck = Hearts.concat(Clubs, Diamonds, Spades)
// }

var shuffle = function(deck) {
  // .shuffle(deck); Have not downloaded jQuery yet. This is the shuffle command

  // next card function
  var currentIndex = deck.length, tempCard, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex); //2
    currentIndex -= 1 // 3

    tempCard = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
  return deck;
}

var shuffleandSetup = function(deck) {

  deck = shuffle(deck);

  for (var i = 0; i < deck.length; i++) {
    if ( i % 2 === 0){
      deckA.push(deck[i]);
  } else {
      deckB.push(deck[i]);
    }
  }
};

var eachRound = function(cardA, cardB) {

  // fieldA.appendChild(cardA)
  // fieldB.appendChild(cardB)
  // if (cardA > cardB) {
  //   scoreA + 1;
  //   deckA.push(cardA);
  //   deckA.push(cardB);
  // } else if (cardA < cardB) {
  //   scoreB + 1;
  //   deckB.push(cardA);
  //   deckB.push(cardB);
  // } else {
    // this is war
    potA = [];
    // potA.push(cardA);
    // draw card from deckA
    // potA.push(drawn card);
    // draw card from deckA
    potB = [];
    // potB.push(cardB);
    // draw a card from deckB
    // potB.push(drawn card);
    // draw card from deckB
    // potA[2] > potB[2]
      //   scoreA + 1;
      //   deckA.push potA.concat(PotB);
      // } else {
      //   scoreB + 1;
      //   deckB = potA.concat(PotB);
    }
  // }
// }

var buttonGo = document.querySelector('.go');
var buttonStart = document.querySelector('.start')

// buttonStart.addEventListener('click', makeaDeck)
buttonStart.addEventListener('click', shuffleandSetup)
// // Page 2

// button2.addEventListener('click', declareAttack)

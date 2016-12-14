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

var makeaDeck = function() {
  var J = 11
  var Q = 12
  var K = 13
  var A = 1
  var numCards = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K]
  var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
  var Hearts = value.map(function(value) {
    return value + ' of Hearts';
  })
  var Diamonds = value.map(function(num) {
    return num + ' of Diamonds';
  })
  var Spades = value.map(function(num) {
    return num + ' of Clubs';
  })
  var Clubs = value.map(function(num) {
    return num + ' of Spades';
  })
  var deck = Hearts.concat(Clubs, Diamonds, Spades)
}

var shuffleandSetup = function() {
  .shuffle(deck); // Have not downloaded jQuery yet. This is the shuffle command
  for (var i = 0; i < deck.length; i++) {
    if ( i % 2 === 0){
      deckA.push(deck[i]);
  } else {
      deckB.push(deck[i]);
    }
  }
};

var eachRound = function(cardA, cardB) {
  fieldA.appendChild(cardA)
  fieldB.appendChild(cardB)
  if (cardA > cardB) {
    scoreA + 1;
    deckA.push(cardA);
    deckA.push(cardB);
  } else if (cardA < cardB) {
    scoreB + 1;
    deckB.push(cardA);
    deckB.push(cardB);
  } else
  function war () {
    potA = [];
    potA.push(cardA);
    potA.push(deckA);
    handA.push(deckA);
    potB = [];
    potB.push(cardB);
    potB.push(deckB);
    handB.push(deckB);
      if (handA > handB) {
        scoreA + 1;
        deckA = potA.concat(PotB);
      } else (handA < handB) {
        scoreB + 1;
        deckB = potA.concat(PotB);
      }
  }
}

var buttonGo = document.querySelector('.go');
var buttonStart = document.querySelector('.start')

buttonStart.addEventListener('click', makeaDeck)
buttonStart.addEventListener('click', shuffleandSetup)
// // Page 2

// button2.addEventListener('click', declareAttack)

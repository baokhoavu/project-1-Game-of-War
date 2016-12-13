var deal = document.querySelector('.deal')
var playerA = document.querySelector('.playerA')
var playerB = document.querySelector('.playerB')
var scoreA = document.querySelector('.scoreA')
var scoreB = document.querySelector('.scoreB')

scoreA.innerHTML = 0
scoreB.innerHTML = 0

// cards = [];

var A = 1
var J = 11
var Q = 12
var K = 13

var value = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K]

var Hearts = value.map(function(num) {
  return num + ' of Hearts'
})
var Diamonds = value.map(function(num) {
  return num + ' of Diamonds';
})
var Spades = value.map(function(num) {
  return num + ' of Spades';
})
var Clubs = value.map(function(num) {
  return num + ' of Clubs';
})
var deck = Hearts.concat(Hearts, Diamonds, Spades)
// suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
var nextCard = cards[Math.random()*cards.length];
var cardA;
var carbB;

var deck = function(value, suits) {

}

var drawCard = function() {

  if (cardA > carbB) {
    scoreA + 1;
  } else {
    scoreB + 1;
  }
}

button.addEventListener('click', drawCard)

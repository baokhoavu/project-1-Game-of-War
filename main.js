
var playerA = document.querySelector('.playerA')
var playerB = document.querySelector('.playerB')
var handA = document.querySelector('.handA')
var handB = document.querySelector('.handB')

var arena1 = [];
var arena2 = [];
var wararena1 = [];
var wararena2 = [];
var deckA = [];
var deckB = [];
var handA;
var handB;
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
var deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
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
  } console.log(deckA);
    console.log(deckB);
    console.log("Captain Morgan's Deck: " + deckA.length);
    console.log("Jack Daniel's Deck: " + deckB.length);
};

var addCardsToArena = function() {
  arena1 = deckA.shift();
  arena2 = deckB.shift();
  console.log('CM card => ', arena1);
  console.log('JD card => ', arena2);
  compareCards();
}

var compareCards = function() {
  if (arena1 > arena2) {
    deckA = deckA.concat(arena1, arena2)
    console.log('Captain Morgan Wins!');
    console.log('CM deck => ', deckA);
    console.log('JD deck => ', deckB);
  } else if (arena2 > arena1) {
    deckB = deckB.concat(arena2, arena1)
    console.log('Jack Daniel Wins!');
    console.log('CM deck => ', deckA);
    console.log('JD deck => ', deckB);
  } else if (arena1 === arena2 || arena2 === arena1) {
    war();
    console.log('war!');
  }
    if (deckA > 51 || deckB === 0) {
      console.log('Winner is one and only Captain Morgan of the Sea!!');
    } else if (deckB > 51 || deckA === 0) {
      console.log('Winner is Captain Jack Daniels!!')
    }
}

function war() {
    wararena1 = deckA.splice(0, 4);
    wararena2 = deckB.splice(0, 4);
    wararena1.unshift(arena1)
    wararena2.unshift(arena2)
    if (wararena1[4] > wararena2[4]) {
      deckA = deckA.concat(wararena1, wararena2)
      console.log('Captain Morgan Wins!');
      console.log('CM deck => ', deckA);
      console.log('JD deck => ', deckB);
    } else if (wararena2[4] > wararena[4]) {
      deckB = deckB.concat(wararena2, wararena1)
      console.log('Jack Daniel Wins!');
      console.log('CM deck => ', deckA);
      console.log('JD deck => ', deckB);
    } else {
      war()
    }
  }



// var eachRound = function() {
//   // each player adds a card to the arena
//   handA = deckA.shift()
//   handB = deckB.shift()
//   console.log('Captain Morgan ' + handA);
//   console.log('Jack Daniel ' + handB);
//   // fieldA.appendChild(cardA)
//   // fieldB.appendChild(cardB)
//   if (handA > handB) {
//     console.log('Captain Morgan Wins!');
//     deckA.push(handA);
//     deckA.push(handB);
//     console.log("Captain Morgan's Deck: " + deckA.length);
//     console.log("Jack Daniel's Deck: " + deckB.length);
//   }
//   else if (handA < handB) {
//     console.log('Jack Daniel Wins!');
//     deckB.push(handA);
//     deckB.push(handB);
//     console.log("Captain Morgan's Deck: " + deckA.length);
//     console.log("Jack Daniel's Deck: " + deckB.length);
//   }
//   // war
//   else if (handA === handB) {
//     console.log('Waaaar!!!!');
//     pot.push(handA);
//     pot.push(handB);
//     pot.push(deckA.shift());
//     pot.push(deckB.shift());
//     handA = deckA.shift();
//     handB = deckB.shift();
//     if(handA > handB) {
//       deckA.push(handA);
//       deckA.push(handB);
//       deckA = deckA.concat(pot);
//       console.log('Captain Morgan Wins!');
//       console.log("Captain Morgan's Deck: " + deckA.length);
//       console.log("Jack Daniel's Deck: " + deckB.length);
//     } else {
//       deckB.push(handA);
//       deckB.push(handB);
//       deckB = deckB.concat(pot);
//       console.log('Jack Daniel Wins!')
//       console.log("Captain Morgan's Deck: " + deckA.length);
//       console.log("Jack Daniel's Deck: " + deckB.length);
//     };
//   };
// }

var buttonHit = document.querySelector('.hit');
var buttonStart = document.querySelector('.start')

// buttonStart.addEventListener('click', makeaDeck)
buttonStart.addEventListener('click', shuffle)
buttonStart.addEventListener('click', shuffleandSetup)

// buttonHit.addEventListener('click', gamePlay)
buttonHit.addEventListener('click', addCardsToArena)
// // Page 2

// button2.addEventListener('click', declareAttack)

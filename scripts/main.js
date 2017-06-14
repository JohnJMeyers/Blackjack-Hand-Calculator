/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

let cards = [8, 7, 'A', 'A']
let faceCard
let ace = []
let small
let value = 0

function handValue (hand) {
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === 'J' || hand[i] === 'Q' || hand[i] === 'K') {
      faceCard = 10
      value += faceCard
    } else if (hand[i] === 'A') {
      ace.push([1, 11])
    } else {
      small = parseInt(hand[i])
      value += small
    }
  }
  for (let x = 0; x < ace.length; x++) {
    if (value + parseInt(ace[x][1]) <= 21) {
      value += parseInt(ace[x][1])
    } else {
      value += parseInt(ace[x][0])
    }
  } return value
}
console.log(handValue(cards))

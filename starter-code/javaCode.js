var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var msg= "";

function createCards(){
	
	var board = document.getElementById('game-board');

	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'cards';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}

}

function isMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		msg ="You found a match";
	}
	else {
		msg ="Sorry, try again";
	}
	setTimeout(showMessage, 500); // this time out is aiming the cards

	setTimeout(resetBoard, 2 * 1000); // this is 3 seconds but it has to be on miliseconds
}
function showMessage(){
	alert(msg);
}

function isTwoCards() {
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  var cardValue =this.getAttribute('data-card');
  cardsInPlay.push(cardValue);

  // alert("This card is "+  cardValue );

  this.innerHTML = '<img class="cardsStyle" src="'+ cardValue +'.png" >'; 


  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
   isMatch();

    // clear cards in play array for next try
    cardsInPlay = [];
  }

}

function resetBoard(){
	var items = document.getElementsByClassName('cards');
	for(var i = 0; i < items.length; i++){
		items[i].innerHTML = "";
	}

}


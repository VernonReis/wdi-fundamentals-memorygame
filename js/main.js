console.log("Up and running!");



var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
	} 
	else {
		alert("Sorry, try again.");
	}

	var cardList = document.getElementsByClassName('gameCard');
	for (var i = 0; i < 4; i++) {
		cardList[i].setAttribute('src','images/back.png')
	}
	cardsInPlay.pop();
	cardsInPlay.pop();
}


var flipCard = function() {


	var cardID = this.getAttribute('data-id');

	if(cardsInPlay.length === 1)
	{
		if(cardsInPlay[0] === cards[cardID])
		{
			alert("Pick a different card.")
			return 0;
		}
	}
	

	this.setAttribute('src',cards[cardID].cardImage)
	console.log("User flipped " + cards[cardID].rank + " of " + cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID]);

	


	if(cardsInPlay.length === 2)
	{
		checkForMatch();
	}

}

var createBoard = function(){

	
	for (var i = 0; i < 4; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.setAttribute('class','gameCard');
		cardElement.addEventListener("click",flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}

createBoard();
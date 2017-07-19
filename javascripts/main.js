console.log("main.js loaded");

// 2-D Array for Game
gameArr =[
	["X","O","X"],
	["O","X","O"],
	["X","O","X"]
];


// Function that initializes array (sets each element to empty string).  Accepts array as argument. 
function initializeArray(array){
		for(var i = 0; i < array.length; i++) {
		for(var j = 0; j < array[i].length; j++) {
			// console.log(array[i][j]);
			array[i][j] = "";
		};
	};
	console.log("Array Initialized : ")
	console.table(array);
};

// initializeArray(gameArr);



document.getElementById("gameboard").addEventListener("click",function(event){
	console.log("You clicked", event.target.id);
});

// Variable to hold Current Player
var currentPlayer;

// Toggle the current player and log it. If not yet set, set to Player 1.
function togglePlayer(){
	if(currentPlayer === 1){
		currentPlayer = 2;
	}else if(currentPlayer === 2){
		currentPlayer = 1;
	}else currentPlayer = 1;
	console.log("Current Player is Player: ", currentPlayer);
};

// togglePlayer();	



















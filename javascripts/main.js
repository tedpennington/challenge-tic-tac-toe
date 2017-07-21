console.log("main.js loaded");

// 2-D Array for Game
const gameArr =[
	["X","O","X"],
	["O","X","O"],
	["X","O","X"]
];

// Get Game Boxes Elements

var boardBox1 = document.getElementById("box1");
var boardBox2 = document.getElementById("box2");
var boardBox3 = document.getElementById("box3");
var boardBox4 = document.getElementById("box4");
var boardBox5 = document.getElementById("box5");
var boardBox6 = document.getElementById("box6");
var boardBox7 = document.getElementById("box7");
var boardBox8 = document.getElementById("box8");
var boardBox9 = document.getElementById("box9");





// Update DOM with current array values
function updateBoardDisp(){
boardBox1.innerText = gameArr[0][0];
boardBox2.innerText = gameArr[0][1];
boardBox3.innerText = gameArr[0][2];
boardBox4.innerText = gameArr[1][0];
boardBox5.innerText = gameArr[1][1];
boardBox6.innerText = gameArr[1][2];
boardBox7.innerText = gameArr[2][0];
boardBox8.innerText = gameArr[2][1];
boardBox9.innerText = gameArr[2][2];
};
// updateBoardDisp();


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



// document.getElementById("gameboard").addEventListener("click",function(event){
// 	console.log("You clicked", event.target.id);
// });

// Variable to hold Current Player
var currentPlayer;

// Toggle the current player and log it. If not yet set, set to Player 1.
function togglePlayer(){
	if(currentPlayer === "X"){
		currentPlayer = "O";
	}else if(currentPlayer === "O"){
		currentPlayer = "X";
	}else currentPlayer = "X";
	// console.log("Current Player is Player: ", currentPlayer);
};

// togglePlayer();	

function checkSame(val1, val2, val3) {
	var arr = [val1, val2, val3];
	if(val1 !== "" && val2 !== "" && val3 !== "" ) {
		for(var i = 1; i < arr.length; i++) {	
			if(arr[i] !== arr[0]) {
			    return false;
			}else{
				return true;
			}

	    };
		
	} 
    
    
};





// Check if there's a winner (or tie)
function checkWinner(){
	if (checkSame(gameArr[0][0], gameArr[0][1], gameArr[0][2]) ||
		checkSame(gameArr[0][0], gameArr[1][1], gameArr[2][2]) || 
		checkSame(gameArr[0][0], gameArr[1][0], gameArr[2][0]) ||
		checkSame(gameArr[0][1], gameArr[1][1], gameArr[2][1]) ||
		checkSame(gameArr[0][2], gameArr[1][1], gameArr[2][0]) ||
		checkSame(gameArr[0][2], gameArr[1][2], gameArr[2][2]) ||
		checkSame(gameArr[1][0], gameArr[1][1], gameArr[1][2]) ||
		checkSame(gameArr[2][0], gameArr[2][1], gameArr[2][2]))	 {
			console.log("WINNER");
		
		};
	console.log("checkWinner ran");
};


const gameBoard = document.getElementById("gameboard");

// Listen for click in given square and record result in array, update DOM to reflect
gameBoard.addEventListener("click", event => {
	switch(event.target.id) {
		case "box1":
			gameArr[0][0] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
		case "box2":
			gameArr[0][1] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
		case "box3":
			gameArr[0][2] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
		case "box4":
			gameArr[1][0] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
		case "box5":
			gameArr[1][1] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
		case "box6":
			gameArr[1][2] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
		case "box7":
			gameArr[2][0] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
		case "box8":
			gameArr[2][1] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
		case "box9":
			gameArr[2][2] = currentPlayer;
			updateBoardDisp();
			checkWinner();
			togglePlayer();
			break;
	}
});


// Running to initalie Player
initializeArray(gameArr);
togglePlayer();



















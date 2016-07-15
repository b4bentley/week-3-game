var wins =0;
var numOfGuesses =10;
var lettersGuessed = [];
var theme = ["gladiator","aliens","avatar", "tombstone"];
var starting = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var word;
var currentWord=[];


if(numOfGuesses ==10){
	createWord();
}

window.onkeypress = function(event){
	console.log("a key was selected");

	//user selected key
	var userChoice = String.fromCharCode(event.keyCode);

	if(lettersGuessed.includes(userChoice)){
		alert("Letter has been selected already")
	} else if(starting.includes(userChoice)==false){
		alert("not a valid character");
	}else{
		if(word.includes(userChoice)){
			//we need to update currentword and check to see if you win

			for(var i =0; i< word.split("").length;i++){
				if(word[i] == userChoice.charAt(0)){
					currentWord[i]= userChoice;
				}
			}

			document.getElementById("wordDiv").innerHTML = currentWord.join(" ");

			lettersGuessed.push(userChoice);
			//retrun letters guessed as a string
			document.getElementById("letters").innerHTML = "Letters already used :" + lettersGuessed.join();

			var a =currentWord.indexOf(" _ ");
			if(a<0){
				wins ++;
				document.getElementById("wins").innerHTML = "Wins :" + wins;
				if(word == "avatar"){
									var aa = new Audio("assests/sound/date.mp3");
				     				aa.play();
				}
				if(word == "gladiator"){
									var aa = new Audio("assests/sound/together.mp3");
				     				aa.play();
				}
				if(word == "aliens"){
									var aa = new Audio("assests/sound/getaway.mp3");
				     				aa.play();
				}
				if(word == "tombstone"){
									var aa = new Audio("assests/sound/cosmopolitan.wav");
				     				aa.play();
				}

				resetGame();
				document.getElementById("guesses").innerHTML = "Number of Guesses Left : " + (numOfGuesses);
				document.getElementById("letters").innerHTML = "Letters already used :";
	
			}

		}else{
			
			document.getElementById("guesses").innerHTML = "Number of Guesses Left : " + (--numOfGuesses);

			if(numOfGuesses == 0){
				resetGame();
				document.getElementById("guesses").innerHTML = "Number of Guesses Left : " + (numOfGuesses);
				document.getElementById("letters").innerHTML = "Letters already used :";

			}else{
			lettersGuessed.push(userChoice);
			//retrun letters guessed as a string
			document.getElementById("letters").innerHTML = "Letters already used :" + lettersGuessed.join();

			}
		}		
	}
}

function resetGame(){
	console.log("resetGame");
	lettersGuessed.length =0;
	currentWord.length =0;
	createWord();
	numOfGuesses=10;

}

function createWord() {
	//create random word from theme
	var themeLength = theme.length;
	var ran = Math.floor((Math.random() * themeLength));
	word = theme[ran];
	console.log(word);

	//set word to current word to display on screen
	var newCurrentWord="";
	for(var i=0; i<word.split("").length; i++){
		currentWord.push(" _ ");
		newCurrentWord+= currentWord[i];
	}
	console.log(currentWord);

	document.getElementById("wordDiv").innerHTML = newCurrentWord;

}

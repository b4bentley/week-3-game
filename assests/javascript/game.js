var wins = 0;

var misses = 0;

var initial = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var starting = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var guessed = [];

var reset = [];

var theme = ["cinderella","gladiator","tangled","frozen","watchman","hancock", "wanted", "titanic", "aladdin"];

// create random choice among theme array
if(misses == 0 ){
misses = 10;
var themeLength = theme.length;
var ran = Math.floor((Math.random() * themeLength));
var word = [theme[ran]];

console.log(word[0]);
}

// parse the random theme into characters
var wordSplit = [];
var blankWord = [];

for(var i =0; i<word[0].length; i++){
	var j = word[0].charAt(i);
	wordSplit.push(j);
	blankWord.push("_");
}
// show the intial word
console.log(wordSplit);
var choosenWord = "<div>"+ blankWord + "</div>";
document.querySelector('#word').innerHTML = choosenWord;


// Where all the magic happens
// 
// 
document.onkeypress = function(event){

	var characterCode = event.charCode;

	var choice = String.fromCharCode(characterCode);

	for (var i=0;i<initial.length;i++){
		// check to see if the user choice is part of the alphabet
		if (choice==initial[i]){
			console.log("made it to second for loop");

			// check to see if the keypressed has been selected
			for(var j=0;j<initial.length;j++){
				if (choice == starting[j]) {
					guessed.push(choice);
					var selected = "<div>Letters already used:"+ guessed + " </div>";
					document.querySelector('#letters').innerHTML = selected;

					starting.splice(j,1);

					var choiceToChar = choice.charAt(0);
					console.log(choiceToChar);
					var missTracker = 0;

					// check to see if the key was a hit
					for(var k = 0; k<wordSplit.length;k++){
						if (wordSplit[k] == choiceToChar) {
							missTracker = 100;
							console.log("hit");

							blankWord[k] = choiceToChar;
							choosenWord = "<div>"+ blankWord + "</div>";
							document.querySelector('#word').innerHTML = choosenWord;

							var a = blankWord.indexOf("_");
							console.log(a);
							if (a<0){
								wins++;
								winsUpdate = "<div>Wins: "+ wins + "</div>";
								document.querySelector('#wins').innerHTML = winsUpdate;

								misses = 10;
								var themeLength = theme.length;
								var ran = Math.floor((Math.random() * themeLength));
								var word = [theme[ran]];
								console.log(word[0]);

								starting = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
								guessed = [];

								// parse the random theme into characters
								 wordSplit = [];
								 blankWord = [];

								for(var i =0; i<word[0].length; i++){
									var j = word[0].charAt(i);
									wordSplit.push(j);
									blankWord.push("_")
								}
								console.log(wordSplit);
								choosenWord = "<div>"+ blankWord + "</div>";
								document.querySelector('#word').innerHTML = choosenWord;
							}

						}

					}

					//change misses if no hits
					if (missTracker == 0){
						misses--;
						missTracker = 0;
						// console.log("misses: " + misses);
						
						var miss = "<div>Number of Guesses Left: "+ misses + " </div>";
						document.querySelector('#guesses').innerHTML = miss;

						if (misses == 0) {
							
							resetgame();

						}

					}else{
						missTracker = 0;
					}


				
				}else{
					// do nothing
				}
			}

		}else{
			// the right button was not selected
			// console.log("wrong button " + initial[i]);
		}
	}

	// console.log("Letter pressed: " + choice);
	// console.log("letters left in starting: "+ starting);
	// console.log("letters in guessed: "+ guessed);

	function resetgame(){
		misses = 10;
		var themeLength = theme.length;
		var ran = Math.floor((Math.random() * themeLength));
		var word = [theme[ran]];
		console.log(word[0]);

		starting = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		guessed = [];

		// parse the random theme into characters
		wordSplit = [];
		blankWord = [];

		for(var i =0; i<word[0].length; i++){
			var j = word[0].charAt(i);
			wordSplit.push(j);
			blankWord.push("_")
		}
		console.log(wordSplit);
		choosenWord = "<div>"+ blankWord + "</div>";
		document.querySelector('#word').innerHTML = choosenWord;		

	}
}
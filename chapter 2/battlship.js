var guess = 0;
var guesses = 0;
var isSunk = false;
var hits = 0;
var head = Math.round(Math.random()*4);
var body = head + 1;
var tail = head + 2;
hitting = [];

function findHits(ht, arr){
  for(i=0; i<arr.length; i++){
  	if(arr[i]== ht){
  		return true;
  	}
  }
  return false;
}

while (!isSunk){
  guess = prompt("READY FIRE!(Enter a number in 0-6):");
  if(guess < 0 || guess > 6){
  	alert("You suck");
  	continue;
  }else if(findHits(guess, hitting)){
     alert("Don't mess with me");
     continue;
  }else if(guess == head || guess == body || guess == tail){
  	hitting.unshift(guess);
  	console.log(findHits(guess, hitting));
  	alert("Hit!");
    hits += 1;
  }else{
  	alert("You missed");
  }
  guesses += 1;
  if(hits == 3){
  	isSunk = true;
  	alert("You sank my battleship in " + guesses + " times!")
  }
}
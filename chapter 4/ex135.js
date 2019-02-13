var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 
55, 61, 51, 44];

// var sortScores = scores;
// sortScores.sort();
// console.log(sortScores);
var largestOne = 0;
var solutions = [];
// var finalWords = "";
// console.log(largestOne);
for(var item=0; item<scores.length; item++){
	document.write("Bubble solution #" + item + " score: " + scores[item] + "<br>");
	if(scores[item] > largestOne){
		largestOne = scores[item];
	}
} 
// finalWords = finalWords.substring(0, finalWords.length-2)
document.write("Bubble tests: " + scores.length + "<br>");
document.write("Highest bubble score: " + largestOne + "<br>");

// console.log("largestOne="+largestOne);
// console.log(finalWords);
for(var i=0; i<scores.length; i++){
	// console.log("#"+scores[i]);
	if(scores[i] == largestOne){
		// console.log(scores[i]);
		solutions.push(i);
	}
}
console.log(solutions);
document.write("Solutions with highest scores: " + solutions);
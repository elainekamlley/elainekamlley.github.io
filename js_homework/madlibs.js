// Construct an array of company names, like Uber, Lyft, Google, Apple
// Construct a silly array of animals
// Make a for loop that makes a sentence similar to "My company is an Uber for dogs!"
// Spit out at least 5 sentences to the console.log()

var corp = ['seamless','grubhub','ubereats','delivery']

var furbabies = ['dogs','cats','bunnies','sloths']

for (var f = 0; f < furbabies.length; f++) {
	for (var c = 0; c < corp.length; c++){
    console.log("My company is a "+ corp[c] + " for " + furbabies[f] + ' ');
	}
}
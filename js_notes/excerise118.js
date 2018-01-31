// Defines an array of dog or cat breeds (or rabbits or whatever your favorite animal is)
// Define a variable for your favorite breed of all time by using prompt() function to take in a breed. (Note: just Google it if you don't know it—It should make sense.)
// Make the computer choose a random breed
// Use the alert() function to output a message saying "Your favorite breed is X? Mine is Y!"
// If it's the same, say "We're besties!" and if not say "You're wrong!"

var dogs = ['pug','bulldog','chow chow','great dane']

var myFav = dogs[Math.floor(Math.random()*dogs.length)]

var fav = prompt("What is your favorite dog?");

alert("Your favorite breed is " + fav + "? " + "Mine is " + myFav )

if (yourSelection === myFavorite) {
  alert("We're besties!");
} else {
  alert("You're wrong!");
}
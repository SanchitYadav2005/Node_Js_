// requiring the package.
const giveMeAJoke = require("give-me-a-joke");
const getColor = require("colors")
// funciton to get random dad joke.
giveMeAJoke.getRandomDadJoke(function(randomDadJoke){
    console.log(randomDadJoke.rainbow)
})
// fuction to get reandom joke of the day.
giveMeAJoke.getRandomJokeOfTheDay(function(randomJoke){
    console.log(randomJoke.green)
})
// function to get costumized joke. This requires first name and last name.
const firstName = "sanchit";
const lastName = "yadav";

giveMeAJoke.getCustomJoke(firstName, lastName, function(costumizedJoke){
    console.log(costumizedJoke.blue)
})
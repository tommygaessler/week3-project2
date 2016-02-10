// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.

confirm("Question 1");

var number1 = prompt("Enter a number!");
var number2 = prompt("Enter another one!");

function minimum()
{
	if (number1 / 1 > number2 / 1) 
	{
		return number2 + " is the smallest!";
	}
	else if (number2 / 1 > number1 / 1) 
	{
		return number1 + " is the smallest!";
	}
	else if (number1 / 1 === number2 / 1) 
	{
		return number1 + " is eqaul to " + number2;
	}
	else 
	{
		return "Enter a number silly!";
	}
}

confirm(minimum());

// 2. Create a new function called minimum3() to find the smallest of three numbers

console.log("Question 2");

var numbers = [-20, 14, 11];

var small = numbers[0];

function minimum3() 
{
	for (i=0; i<numbers.length; i++) 
	{
		if (numbers[i] < small) 
		{
			small = numbers[i];
			
		}
	}
}

console.log(small);

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.

console.log("Question 3");

var numbs = [1,2,3,4];
function sum() 
{
	return numbs.reduce(function(a,b)//reduce adds everything
	{
		return a + b;
	})
}
console.log(sum(numbs));

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

console.log("Question 4");

var numbs = [1,2,3,4];
function sum() 
{
	return numbs.reduce(function(a,b)//reduce multiplies everything
	{
		return a *b;
	})
}
console.log(sum(numbs));


// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.

console.log("Question 5");

var words = ["window", "table", "barstool", "glass", "charger", "outlet"];

function filterSixPlus()
{
	for (i=0; i<words.length; i++) 
	{
		if (words[i].length >= 6) 
		{
			console.log(words[i]);
		}
	}
}
filterSixPlus();

//window
//barstool
//charger
//outlet
//undefined

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.

console.log("Question 6");

var fahr = prompt("Enter a fahrenheit temparture!");

function temp()
{
	fahr -= 32;
	fahr *= 0.5555555556;
	return fahr.toFixed(2);
}
confirm(temp());

// 7. Adding to the code in #2, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

console.log("Question 7");

var fahr = prompt("Enter a temparture!");

var choice = prompt("Enter C to convert to Celsius, and F to convert to Fahrenheit!")

function temp()
{
	if (choice.toUpperCase() === "C") 
	{
		fahr -= 32;
		fahr *= 0.5555555556;
		return fahr.toFixed(2);
	}
	
	else if (choice.toUpperCase() === "F") 
	{
		fahr *= 1.8;
		fahr += 32;
		return fahr.toFixed(2);
	}
	
	else 
	{
		return "You didn't enter either an F, or C!"
	}
}
confirm(temp());

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

console.log("Question 8");

function countBs(letters)
{
	b = "BoBBByB";
	var count = 0;
	for (i=0; i<b.length; i++) 
	{
		if (b.charAt(i) === letters)
		{
			count ++;
		}
	}
	return count + " " + letters + "'s";
}
console.log(countBs("o"));

//5 Bs

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

function countBs(letter1, letter2)
{
	b = "BoBBByB";
	var count1 = 0;
	var count2 = 0;
	for (i=0; i<b.length; i++) 
	{
		if (b.charAt(i) === letter1)
		{
			count1 ++;
		}
		else if (b.charAt(i) === letter2) {
			count2 ++;
		}
	}
	return count1 + " " + letter1 + "'s, and " + count2 + " " + letter2 + "'s";
}
console.log(countBs("o", "B"));

// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.

console.log("Question 10");

var string = "Soon you will master functions!";

function ohZero()
{
	for (i=0; i<string.length; i++) 
	{
        string = string.replace("o", 0);
	}
	return string;
}

console.log(ohZero());

//S00n y0u will master functi0ns!

// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"

console.log("Question 11");

function pigLatinWord(word){
	if(word.match(/^[aeiouAEIOU]/)){
		return word + "yay";
	} else if(word.match(/^[yY]/)){
		return word.substring(1, word.length) + "yay";
	} else {
		return word.substring(1, word.length) + word.substring(0, 1) + "ay";
	}
}
function pigLatinSentence(sentence){
	var phrase = "";
	var words = sentence.split(" ");
	for(i=0; i<words.length; i++){
		phrase += pigLatinWord(words[i]) + " ";
	}
	return phrase;
}
console.log(pigLatinSentence("look at my cool function"));

//ooklay atyay ymay oolcay unctionfay 

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

console.log("Question 12");

function bottles(a)
{
	var b = a - 1;
	
	while (a > 2) 
	{
		console.log( a + " bottles of beer on the wall, " + a + " bottles of beer." + '\n' + " Take one down and pass it around, " + b + " bottles of beer on the wall.");
		
		a --;
		b --;
	}
	
	console.log("2 bottles of beer on the wall, 2 bottles of beer." + '\n' + 
	"Take one down and pass it around, 1 bottle of beer on the wall.");
	
	console.log("1 bottle of beer on the wall, 1 bottle of beer." + '\n' + 
	"Take one down and pass it around, no more bottles of beer on the wall.");
	
	console.log("No more bottles of beer on the wall, no more bottles of beer." + '\n' + 
	"Go to the store and buy some more, 99 bottles of beer on the wall.");
}

bottles(20);

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

confirm("Question 13")

var guessString = prompt("Please guess a number 1 through 100");
var guessNum = parseInt(guessString);
var randomNum = Math.floor(Math.random() * 5);
while(guessNum != randomNum){
	if(guessNum < randomNum){
		guessNum = prompt("Nope! Too low! Please guess another number.")
	}
	else{
		guessNum = prompt("Nope! Too high! Please guess another number.")
	}
};
if(guessNum === randomNum){
	confirm("You're amazing! The number was " + randomNum);
};
confirm("You're amazing! The number was " + randomNum);


// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!

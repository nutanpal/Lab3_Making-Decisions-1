//~/Desktop/Devmountain-dallas-bp/week-1/wed/making-decisions
////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

//CODE HERE
let loveCode = true;

if (loveCode == true) {
  / / / use === console.log("I love to code!");
} else console.log("Coding has its challenges.");

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, 
  and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
if (amysAge > brittanisAge) {
  console.log("Amy is older");
} else if (amysAge < brittanisAge) {
  console.log("Brittani is older");
} else console.log("They are both same age.");

////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year.
   If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

//CODE HERE
if (amysBirthYear === brittanisBirthYear) {
  console.log("Amy & Brittani were born in the same year.");
} else {
  console.log("They were not born in the same year.");
}

////////// PROBLEM 4 //////////

let temperature = 55;
let rain = true;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on 
  what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. 
  If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. 
  If it is 60 degrees or below, one should wear a jacket and carry an umbrella. 
  Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

// if-else And
if (temperature >= 80 && rain) {
  console.log("wear a t-shirt and take an umbrella");
} else if (temperature >= 60 && rain) {
  console.log("wear a rain-jacket");
} else if (temperature < 60 && rain) {
  console.log("wear a jacket and carry an umbrella. ");
} else if (temperature >= 80 && !rain) {
  console.log("wear a t-shirt");
} else if (temperature >= 60 && !rain) {
  console.log("wear a hoodie");
  //} else (temperature<60 && !rain){
} else {
  console.log("wear a winter jacket");
}

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE
for (i = 0; i < 10; i++) {
  console.log("hello");
}

////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ez, on the first iteration it would log 1, on the second iteration it would log 2.
*/

//CODE HERE
for (i = 1; i < 11; i++) {
  console.log(i);
}
////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ecd //Nb: Not ! used on variable name not boolean value, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE
for (i = 10; i > -1; i--) {
  // Q >??? if 0 is not included i>0
  console.log(i);
}

////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

//CODe
while (score < passingScore) {
  console.log("Your score is not high enough");
  score += 1; //q>??? is score ++ same?
}
// NB: not i ++ , not score ++ (as you will keep adding 0, loop will not increase), not score +1, score += 1/ score = score +1
// NB: Not capital W in while, (condition keep running untill)
// infinite printing error  if wrong.

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.
*/

/*  let changeMyMind = true;
if (changeMyMind == true) {  // nb: only = not ==
  changeMyMind = false;
} else {changeMyMind = true}; 
console.log (changeMyMind);  */

let changeMyMind = true;
if (changeMyMind) {
  changeMyMind = false;
} else {
  changeMyMind = true;
}
console.log("1:", changeMyMind);

//CODE HERE

////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log it's new value (it should now read true).

//CODE HERE
changeMyMind = !changeMyMind; // (!=) is wrong ??
console.log(changeMyMind);
// wrong answer 'false' if you let changemymind var , already decalred.

//nb: NOT ! is used on varname to change value from T to F

////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
/* wrong
while (z > 0) {
  for (x = z; (x = 0); x--) {
    console.log(x);
  }
 z--; // nb: if z-- not outside for loop - get no answer log
} */
/* np - Nb: running for loop inside while loop// backward countdown with i(Nb: leT x /to declare then assign.// closing loop with z.dont let i as already declared in file. , use i error : 
infinite while loop of - no?? if x<=1. stop when  x= 0 in countdown.)*/
while (z > 0) {
  for (let x = z; x > 0; x--) {
    console.log(x);
  }
  z--;
}

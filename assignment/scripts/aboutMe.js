// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
const firstName = 'John';
console.log('First name:', firstName);

// 2 - Create a second variable called `lastName` and assign it the value of your last name
const lastName = 'Turner';
console.log('Last Name:', lastName);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
const fullName = firstName + ' ' + lastName;

// 4 - Console log the value of `fullName`
console.log('Full name:', fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
const luckyNumber = 4; //Yes I know 4 is considered unlucky in Japan. Lol
console.log('Lucky number:', luckyNumber);

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log('Mu name is ' + fullName + ', and I think', luckyNumber, 'is a winner!');

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = false;
console.log('Am I feeling adventurous:', adventurous);

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
const food = 'pizza';
console.log('Favorite food:', food);

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 3; //2 glofish and a snale
console.log('I have', pets, 'pets');

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
console.log('My friend has', friendsPets, 'pets');

// 11 - Add two pets to your `pets` variable
pets += 2;
console.log('I got 2 more pets and now have', pets, 'pets');

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 5;
console.log('I am allowed to have', allowedPets, 'pets');

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if (adventurous) {
  console.log('Adventures are great!');
} else {
  console.log('How about we stay home?');
}


// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber === 2 && adventurous === true) {
  console.log('Roll the dice');
} //changed values to test is statement works as expected then reverted to original answers

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets) {
  console.log('I can have more pets');
} else if (pets === allowedPets) {
  console.log('I have enough pets');
} else {
  console.log('Oh no, I have too many pets!');
} //tested all three conditions and reverted to original values

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.
let mostPets;
if (pets > friendsPets) {
  mostPets = pets;
  console.log('I have the most pets because I have', mostPets, 'pets');
} else if (friendsPets > pets) {
  mostPets = friendsPets;
    console.log('My friend has the most pets because she has', mostPets, 'pets');
} else {
  mostPets = pets;
  console.log('My friend and I both have', mostPets, 'pets');
}

mostPets = Math.max(friendsPets, pets);
console.log('Between my friend and I, the one with the most pets has', mostPets, 'pets');

// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
//pets = null;
//friendsPets = null; //used to test cases
switch (pets === friendsPets || Math.max(pets, friendsPets)) {
  case pets === friendsPets:
    console.log('My friend and I both have', pets, 'pets');
    break;
  case pets:
    mostPets = pets;
    console.log('I have the most pets because I have', mostPets, 'pets');
    break;
  case friendsPets:
    mostPets = friendsPets;
    console.log('My friend has the most pets because she has', mostPets, 'pets');
    break;
  default:
    console.log('Invalid input');
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
console.log(adventurous ? 'Adventures are great!': 'How about we stay home?');

console.log("I'm Working!");

// Write a for loop that will log the numbers 1 through 20.

for (var i = 0; i < 21; i++) {
  console.log(i);
}

// Write a for loop that will log only the even numbers in 0 through 200.

for (var i = 0; i <= 200; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (var i = 0; i < 21; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let phrase = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

// let a = Math.floor(Math.random()*(phrase.length-1));

for (var i = 0; i < 21; i++) {
  let a = Math.floor(Math.random()*(phrase.length));
  console.log(phrase[a]);
}

// FIZZBUZZ

for (var i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizzbuzz");
  }
  else if (i % 3 == 0) {
    console.log("fizz");
  }
  else if (i % 5 == 0) {
    console.log("buzz");
  }
  else {
    console.log(i);
  }
  }

// Question 5

const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

// Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".

thom[0] = "Gameboy";

console.log(thom[0]);

// Karolin just had her birthday; change Karolin's array to reflect her being a year older.

karolin[1] = 17;
console.log(karolin[1]);

// Change Matt H's hometown from Philadelphia to "Gotham City".

matt[2] = "Gotham City";
console.log(matt[2]);

// Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
kristyn[2] = "Brooklyn";
console.log(kristyn[2]);


// Yell at the Ninja Turtles

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (var i = 0; i < ninjaTurtles.length; i++) {
  console.log(ninjaTurtles[i].toUpperCase());
}

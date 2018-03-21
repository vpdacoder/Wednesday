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

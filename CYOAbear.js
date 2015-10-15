var wantToDo = confirm("After a lifetime of searching - you're one step closer to the career you've always wanted! A journey of a thousand miles begins witha single step, right?");


var career = prompt("You've decided to join the Ironyard and begin a career as a engineer! Despite your friends and family's warnings - It is much more challenging than anticipated! Do you give up or persist?");
// console.log(career);
console.log(": ", career === "persist");

if (career === "persist") {

  console.log ("Keep it up! You are Closer than you think!");






  var significant = prompt("A few weeks go by and your significant other needs quality time. Do you sacrifice sleep or time spent on school?")


  if (significant === "sleep") {

    console.log ("Good work! You can catch up on sleep in the spring.")


  var lastquestion = prompt("You are closing in on the final project! Your mind is strained, your blood is coffee, but the end in sight! Given the situation you have three choices: sleep, work harder then ever before, nothing")

console.log ("You have done it! You soul is filled with delight! You live happily ever after!")

  var lastquestion = true;
  if(lastquestion === "work harder than ever before") {
    console.log("Sweet Victory");
  } else if(lastquestion === false) {
    console.log("nothing");
  } else {
    console.log("work harder than ever before");
  }

}
else if (career === "give up") {

}
} else {
  console.log("You've chosen poorly. You fail and are filled with soul-wrenching regret.");
}

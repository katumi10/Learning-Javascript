const answer = Math.floor(Math.random() * 10 + 1); 
const display = document.getElementById("display");
let guesses = 0;

document.getElementById("submitBtn").onclick = function () {
  let guess = document.getElementById("guessField").value
  guesses+=1;

  if(guess == answer){
    display.textContent= answer+ " " + "is the number. It took you" + " " + guesses +" " + "guesses"; 
  }
  else if(guess  < answer){
    display.textContent = "Too small!!"
  }
  else{
    display.textContent = "Too large!!"
  }
  
}
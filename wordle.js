const wordBank = [
    "adore", "amuse", "audio" ,"angel", "acute", 
    "basic" ,"beads" , "batch" ,"brace" ,"clean", "coast", "clues" , "clout",
    "dairy", "dates", "dance", "drift", "early", "earth", "event", "faith", "fixed", 
    "freak", "gears", "glaze", "glory", "habit", "heart", "honey", "idols", "ideal", "jeans", 
    "jewel", "junks", "lover", "latch", "mango", "marsh", "nasty", "noisy", "opium", "orbit", 
    "peach", "poets", "pearl", "ratio", "raise", "sigma", "sweat", "youth" 
  ];
  
  var secretWord = wordBank[Math.trunc(Math.random()* wordBank.length)]; 
  var attempts = 5;
  function checkWord() {
      var guess = prompt("Please enter a 5-letter word: ").toLowerCase();
  
      if (!guess || guess.length !== 5) {
          alert("Invalid input. Please enter a valid 5-letter word!");
          return;
      }
  
      var rowIndex = 5 - attempts; 
      if (rowIndex < 0) return; 
  
      var cell0 = document.getElementById(`r-${rowIndex}-0`);
      var cell1 = document.getElementById(`r-${rowIndex}-1`);
      var cell2 = document.getElementById(`r-${rowIndex}-2`);
      var cell3 = document.getElementById(`r-${rowIndex}-3`);
      var cell4 = document.getElementById(`r-${rowIndex}-4`);
      
      cell0.innerHTML = guess[0];
      cell1.innerHTML = guess[1];
      cell2.innerHTML = guess[2];
      cell3.innerHTML = guess[3];
      cell4.innerHTML = guess[4];
  
      if (guess[0] === secretWord[0]) {
          cell0.style.backgroundColor = "red";
      } else if (secretWord.includes(guess[0])) {
          cell0.style.backgroundColor = "yellow";
      } else {
          cell0.style.backgroundColor = "green";
      }
  
      if (guess[1] === secretWord[1]) {
          cell1.style.backgroundColor = "red";
      } else if (secretWord.includes(guess[1])) {
          cell1.style.backgroundColor = "yellow";
      } else {
          cell1.style.backgroundColor = "green";
      }
  
      if (guess[2] === secretWord[2]) {
          cell2.style.backgroundColor = "red";
      } else if (secretWord.includes(guess[2])) {
          cell2.style.backgroundColor = "yellow";
      } else {
          cell2.style.backgroundColor = "green";
      }
  
      if (guess[3] === secretWord[3]) {
          cell3.style.backgroundColor = "red";
      } else if (secretWord.includes(guess[3])) {
          cell3.style.backgroundColor = "yellow";
      } else {
          cell3.style.backgroundColor = "green";
      }
  
      if (guess[4] === secretWord[4]) {
          cell4.style.backgroundColor = "red";
      } else if (secretWord.includes(guess[4])) {
          cell4.style.backgroundColor = "yellow";
      } else {
          cell4.style.backgroundColor = "green";
      }
  
      if (guess === secretWord) {
          alert("Congratulations, you guessed the right word! Kindly reload the page to play again!");
      } else {
          attempts--; 
          if (attempts === 0) {
              alert("Game Over! The word was " + secretWord + ", kindly reload the page to play again!");
          }
      }
  }
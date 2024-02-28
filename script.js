//Declare variable for the emojis and set as an array
const cards = ['🐊','🐧','🐆','🦏','🦈','🦒','🦁','🐃','🐊','🐧','🐆','🦏','🦈','🦒','🦁','🐃'];

//Shuffle emojis from the array using Math.random()
// Using fisher-yates shuffle
function shuffle(cards) {
    let currentIndex = cards.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;


  
      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]]; 

    

    }
    return cards;
}



//create a fuction to attach shuffled cards to html
function displayShuffledCards() {

  const shuffledCards = shuffle(cards);
  const gameContainer = document.getElementById('game'); // Get the game container element
  gameContainer.innerHTML = '';
  let openedCards = [];

  shuffledCards.forEach(function(card) {
      let square = document.createElement('div'); // Create a new div for each card
      square.className = 'item';
      square.textContent = card; // Set the text content of the div to the card
      gameContainer.appendChild(square);
      square.onclick = function() {
       
        
          if (openedCards.length < 2 && !this.classList.contains('boxOpen')) {
              this.classList.add('boxOpen'); 
              openedCards.push(this);
              if (openedCards.length === 2) { 
                
                  setTimeout(function() {
                      if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
                          openedCards.forEach(function(card) {
                              card.classList.add('boxMatch');
                          });
                          openedCards = [];
                          if (document.querySelectorAll('.boxMatch').length === shuffledCards.length) {
                              clearInterval(timer);
                              document.getElementById('timer').innerHTML = 'congrats, you win!';
                              document.querySelector('button').innerHTML = 'RESET';
                          }
                      } else {
                          openedCards.forEach(function(card) {
                              card.classList.remove('boxOpen');
                          });
                          openedCards = [];
                      }
                  }, 900); // Adjust the timeout as needed
              }
              
          }
      };
  });

}

displayShuffledCards();

// Function to start the timer
function startTimer() {
    let count = 60;
    timer = setInterval(function() {
        count--;
        document.getElementById('timer').innerHTML = count;
        if (count === 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = 'Oops...give it another shot!';
            document.querySelector('button').innerHTML = 'TRY AGAIN';
            // Call startTimer again if you want to restart the timer automatically
            // startTimer();
        }
    }, 1000);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
}

// Event listener for reset button
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', function() {
    stopTimer(); // Stop the timer
    document.getElementById('timer').innerHTML = ''; // Clear the timer display
    displayShuffledCards(); // Reset the game
    startTimer(); // Start a new timer
});

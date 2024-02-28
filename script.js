//Declare variable for the emojis and set as an array
const cards = ['🐊','🐧','🐆','🦏','🦈','🦒','🦁','🐃','🐊','🐧','🐆','🦏','🦈','🦒','🦁','🐃'];

//Shuffle emojis from the array using Math.random()
// Using fisher-yates shuffle
function shuffle(cards) {
    let currentIndex = cards.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;


  
      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]]; 

    

    }
    return cards;
}

let openedCards;

//create a fuction to attach shuffled cards to html
function displayShuffledCards() {

  const shuffledCards = shuffle(cards);
  // Get the game container element
  const gameContainer = document.getElementById('game'); 
  gameContainer.innerHTML = '';
//   let openedCards = [];
openedCards=[];

  shuffledCards.forEach(function(card) {
     // Create a new div for each card
      let square = document.createElement('div');
      square.className = 'item';
      // Set the text content(our emojis) of the div to the card
      square.textContent = card; 
      gameContainer.appendChild(square);


      //this function determines how you win and lose
      square.onclick = function() {
        
        //if 2 cards are flipped over the following code will continue
          if (openedCards.length < 2 && !this.classList.contains('boxOpen')) {
              this.classList.add('boxOpen'); 
              openedCards.push(this);
              if (openedCards.length === 2) { 
                
                  setTimeout(function() {
                    //this fist statement allows for two of the same selected cards to
                    //stay faced up
                      if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
                          openedCards.forEach(function(card) {
                              card.classList.add('boxMatch');
                          });
                          //this second statement allows determines a win once all cards
                          //are faced upwards
                          openedCards = [];
                          if (document.querySelectorAll('.boxMatch').length === shuffledCards.length) {
                              clearInterval(timer);
                              //winner message displayed
                              document.getElementById('timer').innerHTML = 'congrats, you win!';
                              //button text displayed if player won
                              document.querySelector('button').innerHTML = 'RESET';
                          }
                      } else {
                        //if cards don't match, flip back over
                          openedCards.forEach(function(card) {
                              card.classList.remove('boxOpen');
                          });
                          openedCards = [];
                      }
                  }, 1000);
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
            //made the cards unable to turn if you lose
            openedCards=false;
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
    document.querySelector('button').innerHTML = 'RESET';
    stopTimer(); // Stop the timer
    document.getElementById('timer').innerHTML = ''; // Clear the timer display
    displayShuffledCards(); // Reset the game
    startTimer(); // Start a new timer
});

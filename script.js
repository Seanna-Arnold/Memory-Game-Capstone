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
                              document.querySelector('h4').innerHTML= 'congrats, you win!';
                          }
                      } else {
                          openedCards.forEach(function(card) {
                              card.classList.remove('boxOpen');
                          });
                          openedCards = [];
                      }
                  }, 1000); // Adjust the timeout as needed
              }
              
          }
      };
  });

}



displayShuffledCards();

let timer;

function startTimer() {
    let count = 60;
    if (document.querySelectorAll('.boxMatch').length === shuffledCards.length) {
        document.querySelector('h4').innerHTML= 'congrats, you win!';
        return; // Exit the function if the game is won
    }
    timer = setInterval(function() {
        count--;
        document.querySelector('h4').innerHTML = count; 
        if (count === 0) {
            clearInterval(timer);
            document.querySelector('h4').innerHTML = 'Oops...try again';
            // Call startTimer again if you want to restart the timer automatically
            // startTimer();
        }
    }, 1000);
}

// Function to handle square click
function handleSquareClick() {
    // Check if the timer has not started yet
        if (!timer) { // Start the timer only if it hasn't started yet
            startTimer();
    }
}

// Loop through squares and attach click event listener
const squares = document.querySelectorAll('.item');
squares.forEach(square => {
    square.addEventListener('click', handleSquareClick);
});

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', function() {
    clearInterval(timer); // Clear the timer
    timer = null; // Reset the timer variable
    document.querySelector('h4').innerHTML = ''; // Clear the timer display
    displayShuffledCards();
    
});
// setTimeout(function() {
//   alert("You Lose ");
// }, 60000); // Set the timer for 1 minute (60000 milliseconds)



// const squares = document.querySelectorAll('.item');

// squares.forEach(square => {
//   square.addEventListener('click', timer);
// });

//Style them into a grid using css


//Create an .onclick function and set a setTimeout function within to determine if
// the two selected cards are the same. If not, turn back over. If so, keep them faced up.



//Use css animation to turn back over



//If all are correct display “win!” with innerText.



//pull the button from document and set it to reset using (”click”, init)


// function displayShuffledCards() {
//     const shuffledCards = shuffle(cards);
//     const gameContainer = document.getElementById('game'); 
//     gameContainer.innerHTML = '';
//     shuffledCards.forEach(card => {
//         let square = document.createElement('div'); // Create a new div for each card
//         square.className = 'item';
//         square.textContent = card; 
//         gameContainer.appendChild(square); // Append the div to the game container
//         square.onclick = function() {
//             this.classList.add('boxOpen');

//             const cardMatch = document.querySelectorAll('.boxOpen');

//             setTimeout (function(){
//               if(cardMatch.length > 1) {
//                 if(cardMatch[0].innerHTML == 
//                   cardMatch[1].innerHTML) {
//                     cardMatch[0].classList.add('boxMatch')
//                     cardMatch[1].classList.add('boxMatch')
//                     cardMatch[1].classList.remove('boxOpen')
//                     cardMatch[0].classList.remove('boxOpen')

//                     if(document.querySelectorAll('.boxMatch').length === cards.length){
                      
//                     } else{
//                       cardMatch[1].classList.remove('boxOpen')
//                       cardMatch[0].classList.remove('boxOpen')
                    
//                     }
//                   }
//               }
//             })
//         };
    
//     });

// } 

const cards = ['🐊','🐧','🐆','🦏','🦈','🦒','🦁','🐃','🐊','🐧','🐆','🦏','🦈','🦒','🦁','🐃'];

//Declare variable for the emojis and set as an array


//Shuffle emojis from the array using math random into divs pulled from the document
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

function displayShuffledCards() {
    const shuffledCards = shuffle(cards);
    const gameContainer = document.getElementById('game'); // Get the game container element
    gameContainer.innerHTML = '';
    shuffledCards.forEach(card => {
        let square = document.createElement('div'); // Create a new div for each card
        square.className = 'item';
        square.textContent = card; // Set the text content of the div to the card
        gameContainer.appendChild(square); // Append the div to the game container
        square.onclick = function() {
            this.classList.add('boxOpen');

            const cardMatch = document.querySelectorAll('.boxOpen');

            setTimeout (function(){
              if(cardMatch.length > 1) {
                if(cardMatch[0].innerHTML == 
                  cardMatch[1].innerHTML) {
                    cardMatch[0].classList.add('boxMatch')
                    cardMatch[1].classList.add('boxMatch')
                    cardMatch[1].classList.remove('boxOpen')
                    cardMatch[0].classList.remove('boxOpen')

                    if(document.querySelectorAll('.boxMatch').length === cards.length){
                      alert('win')
                    } else{
                      cardMatch[1].classList.remove('boxOpen')
                      cardMatch[0].classList.remove('boxOpen')
                    
                    }
                  }
              }
            })
        };
    
    });

} 

function displayShuffledCards() {
  const shuffledCards = shuffle(cards);
  const gameContainer = document.getElementById('game');
  gameContainer.innerHTML = '';
  let openedCards = [];
  shuffledCards.forEach(function(card) {
      let square = document.createElement('div');
      square.className = 'item';
      square.textContent = card;
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
                              alert('You win!');
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



//Style them into a grid using css


//Create an .onclick function and set a setTimeout function within to determine if
// the two selected cards are the same. If not, turn back over. If so, keep them faced up.



//Use css animation to turn back over



//If all are correct display “win!” with innerText.



//pull the button from document and set it to reset using (”click”, init)

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', function() {
    displayShuffledCards();
});

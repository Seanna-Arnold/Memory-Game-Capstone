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

                    // if document
                  }
              }
            })
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

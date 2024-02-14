// callback function for 'keyup' event
function handleKeyUpEvent(event) {
    // key pressed by player
    const keyPressed = event.key;

    // stop the game if pressed 'Esc'
    if (keyPressed === 'Escape') {
        gameOver();
    }

    // key press expected
    const currentLetterElement = document.getElementById('current-letter');
    const currentLetter = currentLetterElement.innerText.toLowerCase();

    // check matched or not
    if (keyPressed === currentLetter) {
        // // increase score by 1
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScore = parseInt(currentScoreElement.innerText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        const currentScore = getElementValueById('current-score');
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore);

        // start a new round
        removeBackgroundColorById(currentLetter);
        continueGame();
    }
    else {
        // // decrease life by 1
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLife = parseInt(currentLifeElement.innerText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        const currentLife = getElementValueById('current-life');
        const newLife = currentLife - 1;
        setElementValueById('current-life', newLife);

        //hide playground and show result-card section
        if (newLife === 0) {
            gameOver();
        }
    }
}

// start game
function startGame() {
    // add event listener for keyup event
    document.addEventListener('keyup', handleKeyUpEvent);

    // hide homepage and final-score and show only playground
    hideElementById('home-page');
    hideElementById('score-card');
    showElementById('play-ground');

    // reset score and life
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);

    // game function
    continueGame();
}

// game function
function continueGame() {
    // generate a random letter
    const randomLetter = generateRandomLetter();

    // display the random letter as current letter
    const currentLetterElement = document.getElementById('current-letter');
    currentLetterElement.innerText = randomLetter;

    // set background color to the letter in kbd
    setBackgroundColorById(randomLetter);
}

// finish game
function gameOver() {
    hideElementById('play-ground');
    showElementById('score-card');

    // update final score
    const finalScore = getElementValueById('current-score');
    setElementValueById('final-score', finalScore);

    // remove background color from the last generated letter
    const currentLetter = getElementTextById('current-letter');
    removeBackgroundColorById(currentLetter);
}
// function play() {
//     // hide the homepage section
//     const homePage = document.getElementById('home-page');
//     homePage.classList.add('hidden');
//     // show the playground section
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function continueGame() {
    // generate a random letter
    const randomLetter = generateRandomLetter();

    // display the random letter as current letter
    const currentLetterElement = document.getElementById('current-letter');
    currentLetterElement.innerText = randomLetter;

    // set background color to the letter in kbd
    setBackgroundColorById(randomLetter);
}

function play() {
    hideElementById('home-page');
    showElementById('play-ground');
    continueGame();
}
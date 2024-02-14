// hide element by adding 'hidden' in classList
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show element by removing 'hidden' from the classList
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// generate a random letter from alphabet array using Math
function generateRandomLetter() {
    // alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');

    // random index between 0-25
    const randomIndex = Math.round(Math.random() * 25);

    // random letter from alphabet array
    const randomLetter = alphabet[randomIndex];
    return randomLetter;
}

// set background color to the generated letter
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}
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

// set background color to the generated letter
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}

// remove background color from the generated letter
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]');
}

// get element value from text element by id
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}

// set element value by id
function setElementValueById(elementId, elementValue) {
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}

// get element text by id
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText;
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
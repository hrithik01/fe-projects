const containerElement = document.querySelector('.container');

const careerArray = ["Freelancer", "Trainer", "Monk", "Businnessman", "Developer", "Designer", "Joshi"];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
    containerElement.innerHTML = `
        <h1>I am a ${careerArray[careerIndex].slice(0, characterIndex)}</h1>
    `;
    characterIndex++;
    if(characterIndex > careerArray[careerIndex].length) {
        characterIndex = 0;
        careerIndex++;
        if(careerIndex >= careerArray.length) {
            careerIndex = 0;
        }
    }
    setTimeout(updateText, 400);
}
// updateText();
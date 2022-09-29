// get the textbox and attach onchange event handler
const choicesTextArea = document.querySelector('textarea');
const choicesContainer = document.querySelector('.choices-container');

choicesTextArea.addEventListener('keyup', createChoices);

function createChoices(e) {
    let choiceArray = e.target.value.split(',');
    let choices = choiceArray.map((choice) => choice.trim() && `<span>${choice.trim()}</span>`)
    choicesContainer.innerHTML = choices.join('');
    if (e.key = 'Enter') {
        selectRandomChoice()
    }
}

function selectRandomChoice() {
    //empty textarea
    //run chosing animation
    //select a random choice
    //add chosen choice style
}
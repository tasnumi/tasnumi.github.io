import {questions} from "./data.js";



let answers = [];
let currentQuestionIndex = 0;



function displayQuestion() {
    // If we have reached the end of the questions array, then display the results
    if(currentQuestionIndex >= questions.length) { 
        displayResult();
        return;
    }

    const questionsTotal = questions[currentQuestionIndex];
    document.getElementById('question-number').textContent = `Question number: ${currentQuestionIndex + 1} / ${questions.length}` // Display the current question number to indicate how long there is left
    document.getElementById('question-text').textContent = questionsTotal.question; // Update the question text to be the current question

    // For each answer, create a button with an onclick event that calls the answerQuestion function passing through the trait linked to the question
    const answersTotal = document.getElementById('answers');
    answersTotal.innerHTML = '';

    questionsTotal.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.textContent = answer.text;
        button.onclick = () => answerQuestion(answer.trait);
        answersTotal.appendChild(button);
    });

}

// This function is called when a button is pressed on the question page
function answerQuestion(trait) {
    answers.push(trait);

    currentQuestionIndex++;

    displayQuestion();
}

// Displays the result based on the most frequent trait
function displayResult() {
    const personality = getMostFrequentTrait(answers);
    window.location.href = `results.html?personality=${encodeURIComponent(personality)}`;
}

// Loops through the answers and finds the most frequent trait
function getMostFrequentTrait(answers) {
    const frequency = {};

    answers.forEach(trait => {
        frequency[trait] = (frequency[trait] || 0) + 1;

    });

    let maxCount = 0;
    let resultTrait = '';
    for(const trait in frequency) {
        if(frequency[trait] > maxCount) {
            maxCount = frequency[trait];
            resultTrait = trait;
        }
    }
    return resultTrait;
}

displayQuestion();
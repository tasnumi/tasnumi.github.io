let answers = [];
let currentQuestionIndex = 0;

const questions = [
    {
        question: "what's your favorite weekend activity?",
        answers: [
            {text: "staying in all the way! (i love my sleep)", trait: "introverted bear"},
            {text: "going out partying", trait: "extroverted bear"},
            {text: "going out of my comfort zone and trying something new", trait: "adventurous bear"},
            {text: "idk...whatever comes to my mind", trait: "grumpy bear"}
        ]
    }
];



function displayQuestion() {
    if(currentQuestionIndex >= questions.length) {
        displayResult();
        return;
    }

    const questionsTotal = questions[currentQuestionIndex];

    document.getElementById('question-text').textContent = questionsTotal.question;

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

function answerQuestion(trait) {
    answers.push(trait);

    currentQuestionIndex++;

    displayQuestion();
}

function displayResult() {
    const result = document.getElementById('result');

    const personality = getMostFrequentTrait(answers);

    result.textContent = `your bear personality is: ${personality}!`;
}

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
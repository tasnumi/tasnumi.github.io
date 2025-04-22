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
    },

    {
        question: "at a party, what do you find yourself doing?",
        answers: [
            {text: "can i dig myself a hole?", trait: "introverted bear"},
            {text: "talking to everyone i meet, duh!", trait: "extroverted bear"},
            {text: "exploring around the vicinity (in a non creepy way)", trait: "adventurous bear"},
            {text: "ew... nothing? staring into space?", trait: "grumpy bear"}
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
    const personality = getMostFrequentTrait(answers);

    const tenorGifs = {
        "introverted bear": "https://tenor.com/view/mimibubu-gif-24985048",
        "extroverted bear": "https://tenor.com/view/bear-dance-no-background-gif-25650543",
        "adventurous bear": "https://tenor.com/view/bubu-dudu-sseeyall-gif-10314151062867395265",
        "grumpy bear": "https://tenor.com/view/bubu-dudu-bubu-dudu-bubbu-tonibear-gif-9693687485129468184"
    };

    const gifURL = tenorGifs[personality];
    window.location.href = `results.html?personality=${encodeURIComponent(personality)}&gif=${encodeURIComponent(gifURL)}`;
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
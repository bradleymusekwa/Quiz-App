// edit these questions
const questions = [
    {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
    {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
    {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
    {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
     {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
      {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
       {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
       {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
        {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    },
         {
        question: "What is the capital city of South Africa? ",
        answers: [
            { text: "Polokwane", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Kimberly", correct: false },
            { text: "Pretoria", correct: true },
        ]
    }
];


const questionsElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer_buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionsElement.innerHTML = `You have scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
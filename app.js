// edit these questions
const questions = [
  {
    question: "In JavaScript, what is a block of statement?",
    answers: [
      { text: "Conditional block", correct: false },
      { text: "block that contains a single statement", correct: false },
      { text: "both conditional block and a single statement", correct: false },
      {
        text: "block that combines a number of statements into a single compound statement",
        correct: true,
      },
    ],
  },
  {
    question: "Function and let are known as:",
    answers: [
      { text: "Keywords", correct: false },
      { text: "Data types", correct: false },
      { text: "Declaration statements", correct: true },
      { text: "Prototypes", correct: false },
    ],
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript",
    answers: [
      { text: "getElementbyId()", correct: false },
      { text: "getElementbyClassName()", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript interpreter do?",
    answers: [
      { text: "Throw an error", correct: false },
      { text: "Ignores the statements", correct: true },
      { text: "Gives a warning", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    question: "Which of following is not a Javascript framework?",
    answers: [
      { text: "Node", correct: false },
      { text: "Vue", correct: false },
      { text: "React", correct: false },
      { text: "Cassandra", correct: true },
    ],
  },
  {
    question:
      "What keyword is used to declare an asynchronous function in Javascript?",
    answers: [
      { text: "async", correct: true },
      { text: "await", correct: false },
      { text: "setTimeout", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "How are objects compared when they are checked with the strict equality operator?",
    answers: [
      { text: "The contents of the objects are compared", correct: false },
      { text: "Their references are compared", correct: true },
      { text: "Bth A and B", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What does … operator do in JS?",
    answers: [
      {
        text: "It is used to spread iterables to individual elements",
        correct: true,
      },
      {
        text: "It is used to describe a datatype of undefined size",
        correct: false,
      },
      { text: "No such operator exists", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which object in Javascript doesn’t have a prototype?",
    answers: [
      { text: "Base Object", correct: false },
      { text: "All objects have a prototype", correct: true },
      { text: "None if the objects have a prototype", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
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

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
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
  Array.from(answerButtons.children).forEach((button) => {
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
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

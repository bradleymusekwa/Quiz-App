// questions Array
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hypertext Machine Language", correct: false },
      { text: "Hyperloop Markup Language", correct: false },
      { text: "Hyperdrive Markup Language", correct: false },
      {
        text: "HyperText Markup Language",
        correct: true,
      },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Current Style Solutions", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cool Styling Services", correct: false },
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
    question: "What does JavaScript allow you to do on a webpage?",
    answers: [
      {
        text: "Add interactivity and dynamic content",
        correct: true,
      },
      {
        text: "Create and apply styles",
        correct: false,
      },
      { text: "Structure the content", correct: false },
      { text: "Create a responsive layout", correct: false },
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

// Start quiz function

function startQuiz() {
  // Show first question
  showQuestion();
  // Reset current question index and score
  currentQuestionIndex = 0;
  score = 0;
  // Set next button text to "Next"
  nextButton.innerHTML = "Next";
}

// Function to show the current question
function showQuestion() {
  // Reset the state of the game
  resetState();

  // Get the current question and its index
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  // Display the question number and text
  questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Loop through the answers of the current question
  currentQuestion.answers.forEach((answer) => {
    // Create a button for each answer
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    // Append the button to the answer buttons container
    answerButtons.appendChild(button);

    // If the answer is correct, store this information in the button's dataset
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    // Add a click event listener to the button
    button.addEventListener("click", selectAnswer);
  });
}

// Function to reset the state of the quiz
function resetState() {
  // Hide the next button
  nextButton.style.display = "none";

  // Remove all answer buttons from the answer buttons container
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle answer button click
function selectAnswer(e) {
  // Get the clicked button
  const selectedBtn = e.target;
  // Check if the clicked button is correct
  const isCorrect = selectedBtn.dataset.correct === "true";
  // Add correct or incorrect class to the clicked button
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // Disable all answer buttons and add correct class to the correct answer button
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  // Show the next button
  nextButton.style.display = "block";
}

// Show the score of the user
function showScore() {
  resetState(); // Reset the game state
  questionsElement.innerHTML = `You have scored ${score} out of ${questions.length}!`; // Display the score
}

// Function to handle next button click
function handleNextButton() {
  // Increment current question index
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    // Show the next question
    showQuestion();
  } else {
    // Show the score
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  // Check if there are more questions

  if (currentQuestionIndex < questions.length) {
    // Handle the next button
    handleNextButton();
  } else {
    // Start the quiz
    startQuiz();
  }
});

startQuiz();

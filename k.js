// Questions Data
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Stephen King"],
        answer: "Harper Lee"
    },
    // Add 7 more questions here...
];

let currentQuestionIndex = 0;
let userAnswers = [];

// DOM Elements
const introPage = document.getElementById('intro');
const questionsPage = document.getElementById('questions');
const resultPage = document.getElementById('result');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const options = document.querySelectorAll('.option');

// Start Game
startBtn.addEventListener('click', () => {
    introPage.style.display = 'none';
    questionsPage.style.display = 'block';
    loadQuestion();
});

// Load Question
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        options.forEach((option, index) => {
            option.textContent = currentQuestion.options[index];
            option.onclick = () => selectOption(currentQuestion.options[index]);
        });
    } else {
        showResult();
    }
}

// Select Option
function selectOption(selectedAnswer) {
    userAnswers.push(selectedAnswer);
    currentQuestionIndex++;
    loadQuestion();
}

// Show Result
function showResult() {
    questionsPage.style.display = 'none';
    resultPage.style.display = 'block';
    console.log("User Answers:", userAnswers); // Mock backend storage
}

// Mock Backend Storage
function sendDataToBackend(data) {
    // Replace this with actual backend API call
    console.log("Data sent to backend:", data);
}
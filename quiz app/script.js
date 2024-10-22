// Quiz data with 5 questions
const quizData = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correct: 2
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3
  },
  {
    question: "What is 5 + 7?",
    options: ["10", "11", "12", "13"],
    correct: 2
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C#", "Java"],
    correct: 1
  },
  {
    question: "Who developed JavaScript?",
    options: ["Brendan Eich", "Tim Berners-Lee", "Mark Zuckerberg", "Elon Musk"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score-value");

// Load a question
function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.innerText = currentQuiz.question;

  optionsEl.forEach((option, index) => {
    option.innerText = currentQuiz.options[index];
    option.classList.remove("correct", "wrong");
    option.disabled = false;
  });
}

// Handle answer selection
function selectAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestion].correct;

  if (selectedIndex === correctIndex) {
    optionsEl[selectedIndex].classList.add("correct");
    score++;
    scoreEl.innerText = score;
  } else {
    optionsEl[selectedIndex].classList.add("wrong");
    optionsEl[correctIndex].classList.add("correct");
  }

  optionsEl.forEach(option => (option.disabled = true));
}

// Move to the next question
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("score").classList.remove("hidden");
    questionEl.innerText = "🎉 Quiz Completed!";
    nextBtn.classList.add("hidden");
  }
}

// Initialize the quiz
loadQuestion();



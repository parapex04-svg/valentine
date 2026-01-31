document.addEventListener("DOMContentLoaded", () => {

  /* NAVIGATION */
  window.goToProposal = function () {
    window.location.href = "proposal.html";
  };

  window.goToQuiz = function () {
    window.location.href = "quiz.html";
  };

  /* FLOATING HEARTS */
  const heartsContainer = document.querySelector(".hearts");

  if (heartsContainer) {
    function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "❤️";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (10 + Math.random() * 4) + "s";
      heart.style.fontSize = (14 + Math.random() * 10) + "px";

      heartsContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 14000);
    }

    setInterval(createHeart, 800);
  }

  /* QUIZ LOGIC */
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");

  if (questionEl && optionsEl) {
    const quizData = [
      {
        question: "What did I propose to you with on our first Valentine’s Day together?",
        options: ["A rose 🌹", "A letter 💌", "A cheesecake 🍰", "Nothing"],
        correct: 2
      },
      {
        question: "Which animal best describes you?",
        options: ["Otter 🦦", "Penguin 🐧", "Swan 🦢", "Billei 💖"],
        correct: 3
      },
      {
        question: "Who is my favorite person in the world?",
        options: ["Rupa", "Anannya", "Billeimon", "All of the above 💕"],
        correct: 3
      }
    ];

    let currentQuestion = 0;

    function loadQuestion() {
      feedbackEl.innerText = "";
      questionEl.innerText = quizData[currentQuestion].question;
      optionsEl.innerHTML = "";

      quizData[currentQuestion].options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
      });
    }

    function checkAnswer(index) {
      if (index === quizData[currentQuestion].correct) {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          loadQuestion();
        } else {
          window.location.href = "note1.html";
        }
      } else {
        feedbackEl.innerText = "Hmm… think again 😌";
      }
    }

    loadQuestion();
  }

});


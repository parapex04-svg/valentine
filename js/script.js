/* NAVIGATION */
function goToProposal() {
  window.location.href = "proposal.html";
}

function goToQuiz() {
  window.location.href = "quiz.html";
}

/* FLOATING HEARTS */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (10 + Math.random() * 4) + "s";
  heart.style.fontSize = (14 + Math.random() * 10) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 14000);
}

setInterval(createHeart, 800);

/* NO BUTTON ESCAPE 😈 */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
}


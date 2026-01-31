function goToProposal() {
  window.location.href = "proposal.html";
}

/* HEART ANIMATION */
const heartsContainer = document.createElement("div");
heartsContainer.className = "hearts";
document.body.appendChild(heartsContainer);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  heart.style.fontSize = (16 + Math.random() * 14) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);

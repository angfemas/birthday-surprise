// script.js

function openLetter() {
  document.getElementById("letterModal").style.display = "block";
  // Optionally trigger confetti here too
  if (typeof confetti === "function") confetti();
}

function closeLetter() {
  document.getElementById("letterModal").style.display = "none";
}

// Close modal when clicking outside the letter content
window.onclick = function (event) {
  const modal = document.getElementById("letterModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Optional: Trigger confetti on page load
window.onload = function () {
  if (typeof confetti === "function") confetti();
};

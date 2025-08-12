const qs = (selector, context = document) => {
  return context.querySelector(selector);
};
const qsa = (selector, context = document) => {
  return context.querySelectorAll(selector);
};

const ratingButtons = qsa("#rating-buttons button");
const ratingDisplay = qs("#rating-display");
const submitButton = qs("#submit-button");
const thankYouSection = qs("#thank-you-section");
const ratingSection = qs("#rating-section");

submitButton.disabled = true;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const rating = button.dataset.rating;
    if (rating) {
      submitButton.disabled = false;
    }
    ratingDisplay.textContent = rating;
    // toggle .active
    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

submitButton.addEventListener("click", () => {
  const value = parseInt(ratingDisplay.textContent);
  if (Number.isFinite(value) && value >= 1 && value <= 5) {
    thankYouSection.style.display = "flex";
    ratingSection.style.display = "none";
  }
});

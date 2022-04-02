const featureButtons = document.querySelectorAll(".feature-btn");
const featureTabs = document.querySelectorAll(".feature-tab");
const faqQuestions = document.querySelectorAll(".faq-question");

let activeFeature = 0;

featureButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    featureButtons.forEach((button) => button.classList.remove("active"));
    featureTabs.forEach((tab) => tab.classList.remove("active"));
    activeFeature = index;
    featureButtons[activeFeature].classList.add("active");
    featureTabs[activeFeature].classList.add("active");
  });
});

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.remove("active");
    } else {
      faqQuestions.forEach((item) =>
        item.parentNode.classList.remove("active")
      );
      question.parentNode.classList.add("active");
    }
  });
});

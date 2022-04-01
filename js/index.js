const faqQuestions = document.querySelectorAll(".faq-question");

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

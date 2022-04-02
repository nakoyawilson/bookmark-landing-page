const navigation = document.getElementById("navigation");
const openButton = document.getElementById("open-menu");
const closeButton = document.getElementById("close-menu");
const navLinks = document.querySelectorAll(".nav-link");
const featureButtons = document.querySelectorAll(".feature-btn");
const featureTabs = document.querySelectorAll(".feature-tab");
const faqQuestions = document.querySelectorAll(".faq-question");

let activeFeature = 0;

const openMenu = () => {
  navigation.classList.add("open");
  document.body.classList.add("lock-scroll");
};

const closeMenu = (e) => {
  navigation.classList.remove("open");
  document.body.classList.remove("lock-scroll");
  e.preventDefault();
};

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

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

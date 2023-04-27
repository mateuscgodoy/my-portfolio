// Function Definitions
const showLessEffect = (button) => {
  const liElement = button.parentElement;
  const isDarkMode = liElement.classList.contains("dark-mode");
  console.log(isDarkMode);

  liElement.querySelector(".li-title").style.display = "block";
  liElement.querySelector(".show-section").style.display = "none";

  liElement.style.backgroundColor = isDarkMode ? "black" : "white";
  button.innerHTML = "Show More";
  button.onclick = showMore;
};

const showLess = (event) => {
  showLessEffect(event.target);
};

const showMore = (event) => {
  const liElement = event.target.parentElement;
  const isDarkMode = liElement.classList.contains("dark-mode");

  liElement.querySelector(".li-title").style.display = "none";
  liElement.querySelector(".show-section").style.display = "block";

  liElement.style.backgroundColor = isDarkMode
    ? "var(--low-black)"
    : "var(--low-white)";
  event.target.innerHTML = "Show Less";
  event.target.onclick = showLess;
};

const assignPageButtons = () => {
  const showMoreButtons = Array.from(
    document.getElementsByClassName("li-button")
  );
  showMoreButtons.forEach((button) => {
    button.onclick = showMore;
  });

  btn = document.getElementById("dark-mode-btn");
  btn.addEventListener("click", toggleDarkMode);
};

const headerEffect = () => {
  const yRangeToActivate = 400;
  const h2FromHeader = document.getElementById("name-header");
  if (window.scrollY > yRangeToActivate) {
    h2FromHeader.innerHTML = "M. C. G.";
  } else {
    h2FromHeader.innerHTML = "Mateus Colombo Godoy";
  }
};

const toggleDarkMode = () => {
  document.querySelector("body").classList.toggle("dark-mode");
  document.querySelector("main").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  const subSections = document.querySelectorAll(".sub-section");
  Array.from(subSections).forEach((x) =>
    Array.from(x.querySelectorAll("li")).forEach((y) => {
      y.classList.toggle("dark-mode");
      const cardIsShowing =
        y.querySelector(".show-section").style.display === "block";
      // console.log(y.querySelector(".show-section").style.display);
      if (cardIsShowing) {
        showLessEffect(y.querySelector(".li-button"));
      } else {
        y.style.backgroundColor = y.classList.contains("dark-mode")
          ? "black"
          : "white";
      }
    })
  );
};

// Function Callings
assignPageButtons();
headerEffect();
window.addEventListener("scroll", headerEffect);

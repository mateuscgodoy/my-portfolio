const showLess = (event) => {
  const liElement = event.target.parentElement;
  liElement.querySelector(".li-title").style.display = "block";
  liElement.querySelector(".show-section").style.display = "none";
  liElement.style.backgroundColor = "hsla(0, 0%, 100%, 1)";
  event.target.innerHTML = "Show More";
  event.target.onclick = showMore;
};

const showMore = (event) => {
  const liElement = event.target.parentElement;
  liElement.querySelector(".li-title").style.display = "none";
  liElement.querySelector(".show-section").style.display = "block";
  liElement.style.backgroundColor = "hsla(0, 0%, 90%, 0.5)";
  event.target.innerHTML = "Show Less";
  event.target.onclick = showLess;
};

const showMoreButtons = Array.from(
  document.getElementsByClassName("li-button")
);
showMoreButtons.forEach((button) => {
  button.onclick = showMore;
});

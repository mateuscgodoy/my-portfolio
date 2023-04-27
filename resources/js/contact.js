const assignDarkMode = () => {
  btn = document.getElementById("dark-mode-btn");
  console.log(btn);
  const darkModeFunc = () => {
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector("main").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
  };
  btn.addEventListener("click", darkModeFunc);
};

assignDarkMode();

const target = document.getElementById("h-right2");
target.addEventListener("click", () => {
  const target = document.getElementById("h-right2");
  target.classList.toggle("open");
  const nav = document.getElementById("h-right3");
  nav.classList.toggle("in");
});
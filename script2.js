const slides = document.querySelectorAll("#slideshow img");
let currentSlide = 1;
let slideInterval;

function startSlideShow() {
  nextSlide();
  slideInterval = setInterval(nextSlide, 3000);
}

function nextSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

function restartSlideShow() {
  startSlideShow();
}

window.addEventListener("load", startSlideShow);

document
  .getElementById("slideshow")
  .addEventListener("mouseover", stopSlideShow);
document
  .getElementById("slideshow")
  .addEventListener("mouseout", restartSlideShow);

function rndColor() {
  const button = document.getElementById("myButton");

  button.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // генерируем случайный цвет
    button.style.backgroundColor = "#" + randomColor; // устанавливаем цвет кнопки
  });
}

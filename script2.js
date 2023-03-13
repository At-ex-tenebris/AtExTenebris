const slides = document.querySelectorAll("#slideshow img");
let currentSlide = 0;
let slideInterval;

// start slideshow
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 3000);
}

// change slide
function nextSlide() {
  // hide current slide
  slides[currentSlide].classList.remove("active");

  // update current slide index
  currentSlide = (currentSlide + 1) % slides.length;

  // show next slide
  slides[currentSlide].classList.add("active");
}

// stop slideshow on mouseover
function stopSlideShow() {
  clearInterval(slideInterval);
}

// restart slideshow on mouseout
function restartSlideShow() {
  startSlideShow();
}

// start slideshow when the page loads
window.addEventListener("load", startSlideShow);

// stop/restart slideshow on mouseover/mouseout
document
  .getElementById("slideshow")
  .addEventListener("mouseover", stopSlideShow);
document
  .getElementById("slideshow")
  .addEventListener("mouseout", restartSlideShow);

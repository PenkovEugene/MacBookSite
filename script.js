
// меню-бургер НАЧАЛО

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("header_burger").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("open")
  });
});

// меню-бургер КОНЕЦ


// слайдер НАЧАЛО

const initSlider = () => {
  const carousel = document.querySelector(".slider-wrapper .carousel");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".slider-Container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth; 

  scrollbarThumb.addEventListener("mousedown", (event) => {
    const startX = event.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;

    const handleMouseMove = (event) => {
      const deltaX = event.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxthumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const boundedPosition = Math.max(0, Math.min(maxthumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxthumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      carousel.scrollLeft = scrollPosition;
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = (carousel.clientWidth  + 24) * direction;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" })
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = carousel.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = carousel.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  const updateScrollThumbPosition = () => {
    const scrollPosition = carousel.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  carousel.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
}

window.addEventListener("load", initSlider);

// слайдер КОНЕЦ


// таймер СТАРТ

const currentYear = new Date().getFullYear();
const actionTime = new Date("March 08 2024 00:00:00");
// для теста
// const actionTime = new Date("February 05 2024 18:36:00");
//

let intervalId;

function updateActionTimer () {
  const currentTime = new Date();
  const diffTime = actionTime - currentTime;

  if (diffTime <= 0) {
    clearInterval(intervalId);
    document.getElementById("timer-Group").innerText = "- - -";
    return
  }

  const daysLeft = Math.floor(diffTime / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diffTime / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diffTime / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diffTime / 1000) % 60;

  document.getElementById("saleDays").innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  document.getElementById("saleHours").innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  document.getElementById("saleMinutes").innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  document.getElementById("saleSeconds").innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

intervalId = setInterval(updateActionTimer, 1000);

// таймер КОНЕЦ


// попап НАЧАЛО

function createPopup(id) {
  let popupNode = document.querySelector(id);
  let overlay = popupNode.querySelector(".overlay");
  let closeBtn = popupNode.querySelector(".close-button");

  function openPopup () {
    popupNode.classList.add("active");
  }

  function closePopup () {
    popupNode.classList.remove("active");
  }

  overlay.addEventListener("click", closePopup);
  closeBtn.addEventListener("click", closePopup);
  return openPopup;
}

let popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener("click", popup);

// попап КОНЕЦ


// дропдаун НАЧАЛО

const dropdown = document.querySelectorAll(".dropdown-Container");

const vector = document.querySelector(".vector-rotate");
const dropdownCont = document.querySelector(".free_shipping");
const dropdownOpen = document.querySelector(".dropdown_Open")

dropdownCont.addEventListener("click", () => {
  dropdownOpen.classList.toggle("open");
  vector.classList.toggle("open");
  vector.classList.toggle("close");
});


// дропдаун КОНЕЦ


// футтер НАЧАЛО

document.addEventListener("DOMContentLoaded", function() {
  const footerButton = document.getElementById("footer_button");
  const footerText = document.querySelector(".footer-Wrapper");

  footerButton.addEventListener("click", function() {
    if (footerText.classList.contains("collapsed")) {
      footerText.classList.remove("collapsed");
      footerButton.textContent = "Read more";
    } else {
      footerText.classList.add("collapsed");
      footerButton.textContent = "Read less";
    }
  });
});

// футтер КОНЕЦ
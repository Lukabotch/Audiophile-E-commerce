const speakerOpacity = document.querySelector(".zx9speakers");
const speakerOpacity2 = document.querySelector(".zx7speaker");
const earphonesImageOpacity = document.querySelector(".yx1earphonesImage");
const earphonesDescriptionOpacity = document.querySelector(
  ".yx1earphonesDescription"
);
const bestGearOpacity = document.querySelector(".advertisment");

// function checks if element is visible on screen
function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  // Only completely visible elements return true:
  var isVisible = elemTop + 50 <= window.innerHeight;
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

// function changes html elements opacity to 1 when its coordinates shown on screen while scrolling
window.addEventListener("scroll", function () {
  if (isScrolledIntoView(speakerOpacity2)) {
    speakerOpacity2.style.cssText = "opacity:1";
  }
  if (isScrolledIntoView(speakerOpacity)) {
    speakerOpacity.style.cssText = "opacity:1";
  }
  if (isScrolledIntoView(earphonesImageOpacity)) {
    earphonesImageOpacity.style.cssText = "opacity:1";
  }
  if (isScrolledIntoView(earphonesDescriptionOpacity)) {
    earphonesDescriptionOpacity.style.cssText =
      "animation-name: changeOp;animation-iteration-count: 1;animation-fill-mode: forwards; animation-duration: 1.2s; animation-delay:0.5s";
  }
  if (isScrolledIntoView(bestGearOpacity)) {
    bestGearOpacity.style.cssText = "opacity:1";
  }
});

const productListCardButton = document.querySelector(".productListCard");
const darkOverlay = document.querySelector(".dark-overlay");
const myProductList = document.querySelector(".seeMyProduct");

//this function binda a click event to the trigger element, and opens the modal when the event is triggered. makes elemet visible which overlays to content and makes it disabled while it's display is block
productListCardButton.addEventListener("click", function () {
  darkOverlay.style.cssText = "visibility:visible;opacity:1";
  document.body.style.cssText = "overflow:hidden";
  myProductList.style.cssText = "opacity:1;visibility:visible";
});

darkOverlay.addEventListener("click", function () {
  darkOverlay.style.cssText = "visibility:hidden;opacity:0";
  document.body.style.cssText = "overflow:visible";
  myProductList.style.cssText = "visibility:hidden";
});

const burgerMenu = document.querySelector(".burgerMenu");
const hamburger = document.querySelector(".burger");
const categories = document.querySelector(".categories");
const navbar = document.getElementById("indexNavbar");
const darkOverlayForBurger = document.querySelector(".dark-overlay2");
let counter = true;
burgerMenu.innerHTML = categories.innerHTML;
hamburger.addEventListener("click", function () {
  if (counter) {
    burgerMenu.style.cssText = "visibility:visible;margin-top:89px;opacity:1";
    darkOverlayForBurger.style.cssText = "visibility:visible;opacity:1";
    counter = false;
  } else {
    burgerMenu.style.cssText = "margin-top:-100%;opacity:0";
    darkOverlayForBurger.style.cssText = "visibility:hidden;opacity:0";
    counter = true;
  }
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 927) {
    burgerMenu.style.cssText = "margin-top:-100%;opacity:0";
    darkOverlayForBurger.style.cssText = "visibility:hidden;opacity:0";
    counter = true
  }
});

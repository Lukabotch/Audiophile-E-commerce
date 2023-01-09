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
    counter = true;
  }
});

// this function leaves one radio button checked
const radioButtons = document.querySelectorAll(
  '.chooseMethod input[type="radio"]'
);
console.log(radioButtons);
radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    radioButtons.forEach((b) => {
      if (b !== button) {
        b.checked = false;
      }
    });
  });
});

const emoney = document.querySelector(".emoney");
const emoneyInput = document.getElementById("emoney");
const emoneyDetails = document.querySelector(".emoneyDetails");

const cashOn = document.querySelector(".cashShape");
const cashRadio = document.querySelector(".cashOnDelivery");
const cashRadioInput = document.getElementById("cashOnDelivery");

// this function makes div display flex if its radio is checked and makes display none the other
cashRadio.addEventListener("change", function () {
  if (cashRadioInput.checked) {
    cashOn.style.cssText = "display:flex";
    emoneyDetails.style.cssText = "display:none";
  }
});

// this function makes div display flex if its radio is checked and makes display none the other
emoney.addEventListener("change", () => {
  if (emoneyInput.checked) {
    emoneyDetails.style.cssText = "display:flex";
    cashOn.style.cssText = "display:none";
  }
});

// thisi is go back link
const goBack = document.querySelector(".goBack h6");
goBack.addEventListener("click", function () {
  window.history.back();
});

const darkOverlay3 = document.querySelector(".dark-overlay3");
const buyPopup = document.querySelector(".buyPopup");
const buyPopupButton = document.querySelector(".continue");
// listens to click on continue button and pops up last payment result div
buyPopupButton.addEventListener("click", () => {
  darkOverlay3.style.cssText = "visibility:visible;opacity:1";
  buyPopup.style.cssText = "visibility:visible; opacity:1";
});

// closes popup when its clicked outside div
darkOverlay3.addEventListener("click", () => {
  darkOverlay3.style.cssText = "visibility:hidden;opacity:0";
  buyPopup.style.cssText = "visibility:hidden; opacity:0";
});

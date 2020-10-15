// CODE FOR DYNAMIC TEXT //

"use strict";

// randomNumber function

const randomNumber = (max) => Math.floor(Math.random() * max);

// applyAnimationClass function

const applyAnimationClass = () => {
  const animateOptions = [
    "animateYellow",

    "animateTurquoise",

    "animateOrange",

    "animateLightBlue",
  ];

  const randomIndex = randomNumber(animateOptions.length);
  return animateOptions[randomIndex];
};

function _toArray(arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
}

function makeSpans(selector) {
  var _document$querySelect = document.querySelectorAll(selector);

  var _document$querySelect2 = _toArray(_document$querySelect);

  var elements = _document$querySelect2.slice(0);

  return elements.map(function (element) {
    var text = element.innerText.split("");

    var spans = text

      .map(function (letter) {
        return `<span class='${applyAnimationClass()}'>${letter}</span>`;
      })

      .join("");

    return (element.innerHTML = spans);
  });
}

// usage with single selector

makeSpans(".dynamic");

// CODE FOR SMOOTH SCROLLING for web-browser compatibility //
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});

// CODE FOR IMAGE LAZY LOADING //
if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll("img.lazyload");
      images.forEach(img => {
          img.src = img.dataset.src;
      });
  } else {
      // Dynamically import the LazySizes library
    let script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
    document.body.appendChild(script);
  };



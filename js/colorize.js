'use strict';

(function () {
  window.getRandomColor = function (COLORS) {
    return COLORS[Math.floor(COLORS.length * Math.random())];
  };

  window.colorize = function (element, COLORS, hiddenInput) {
    element.addEventListener('click', function () {
      var color = window.getRandomColor(COLORS);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      hiddenInput.value = color;
    });
  };
})();

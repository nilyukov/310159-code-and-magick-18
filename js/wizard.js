'use strict';
(function () {
  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var setupPlayer = document.querySelector('.setup-player');
  var wizardFireballElement = setupPlayer.querySelector('.setup-fireball-wrap');
  var coatHiddenInput = setupPlayer.querySelector('[name=coat-color]');
  var eyesHiddenInput = setupPlayer.querySelector('[name=eyes-color]');
  var fireballHiddenInput = setupPlayer.querySelector('[name=fireball-color]');

  var wizard = {
    eyesChangeHandler: function (color) {
      return color;
    },
    coatChangeHandler: function (color) {
      return color;
    }
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  wizardCoatElement.addEventListener('click', function (evt) {
    var newColor = getRandomElement(window.util.COAT_COLORS);
    evt.target.style.fill = newColor;
    coatHiddenInput.value = newColor;
    wizard.coatChangeHandler(newColor);
  });

  wizardEyesElement.addEventListener('click', function (evt) {
    var newColor = getRandomElement(window.util.EYE_COLORS);
    evt.target.style.fill = newColor;
    eyesHiddenInput.value = newColor;
    wizard.eyesChangeHandler(newColor);
  });

  wizardFireballElement.addEventListener('click', function (evt) {
    var newColor = getRandomElement(window.util.FIREBALL_COLORS);
    evt.target.style.backgroundColor = newColor;
    fireballHiddenInput.value = newColor;
  });

  window.wizard = wizard;
})();

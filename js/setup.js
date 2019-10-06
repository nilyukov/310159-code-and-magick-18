'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var FIRST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COUNT_SIMILAR_WIZARD = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupPlayer = document.querySelector('.setup-player');
var userNameInput = setup.querySelector('.setup-user-name');
var descriptionWizards = [];

var generateRandomDescriptionWizard = function () {
  return {
    name: NAMES[Math.floor(Math.random() * NAMES.length)] + ' ' + FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
    coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
    eyeColor: EYE_COLORS[Math.floor(Math.random() * EYE_COLORS.length)]
  };
};

var renderWizard = function (descriptionWizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = descriptionWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = descriptionWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = descriptionWizard.eyeColor;
  return wizardElement;
};

var fillSimilarList = function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < COUNT_SIMILAR_WIZARD; i++) {
    descriptionWizards.push(generateRandomDescriptionWizard());
    fragment.appendChild(renderWizard(descriptionWizards[i]));
  }
  similarListElement.appendChild(fragment);
};

fillSimilarList();
document.querySelector('.setup-similar').classList.remove('hidden');

var popupEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var inputEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardCoatClickHandler = function () {
  document.querySelector('.wizard-coat').style.fill = COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)];
};

var wizardEyesClickHandler = function () {
  document.querySelector('.wizard-eyes').style.fill = EYE_COLORS[Math.floor(Math.random() * EYE_COLORS.length)];
};

var fireballClickHandler = function () {
  var randomFireballBackground = FIREBALL_COLORS[Math.floor(Math.random() * FIREBALL_COLORS.length)];
  document.querySelector('.setup-fireball-wrap').style.background = randomFireballBackground;
  document.querySelector('.setup-fireball-wrap [name=fireball-color]').value = randomFireballBackground;
};

setupPlayer.querySelector('.wizard-coat').addEventListener('click', wizardCoatClickHandler);

setupPlayer.querySelector('.wizard-eyes').addEventListener('click', wizardEyesClickHandler);

setupPlayer.querySelector('.setup-fireball-wrap').addEventListener('click', fireballClickHandler);

userNameInput.addEventListener('keydown', inputEscPressHandler);

'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var FIRST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COUNT_SIMILAR_WIZARD = 4;

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

document.querySelector('.setup').classList.remove('hidden');
fillSimilarList();
document.querySelector('.setup-similar').classList.remove('hidden');

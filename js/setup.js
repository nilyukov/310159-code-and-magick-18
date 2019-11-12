'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var FIRST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COUNT_SIMILAR_WIZARD = 4;
  var descriptionWizards = [];
  var generateRandomDescriptionWizard = function () {
    return {
      name: NAMES[Math.floor(Math.random() * NAMES.length)] + ' ' + FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
      coatColor: window.getRandomColor(window.util.COAT_COLORS),
      eyeColor: window.getRandomColor(window.util.EYE_COLORS)
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
})();

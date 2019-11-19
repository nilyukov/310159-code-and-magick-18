'use strict';

(function () {
  var coatColor;
  var eyesColor;
  var allWizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(allWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.eyesChangeHandler = function (color) {
    eyesColor = color;
    window.debounce(updateWizards);
  };

  window.wizard.coatChangeHandler = function (color) {
    coatColor = color;
    window.debounce(updateWizards);
  };

  var successHandler = function (wizards) {
    allWizards = wizards;
    updateWizards();
  };

  window.backend.load(successHandler, window.util.errorHandler);
})();

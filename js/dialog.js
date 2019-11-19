'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var popupEscPressHandler = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var popupEnterPressHandler = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  };

  var setupEnterPressHandler = function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.removeAttribute('style');
    document.removeEventListener('keydown', popupEscPressHandler);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', popupEnterPressHandler);

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', setupEnterPressHandler);

  userNameInput.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });

  var dialogHandler = setup.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (dragged) {
        var clickPreventDefaultHandler = function (preventEvt) {
          preventEvt.preventDefault();
          dialogHandler.removeEventListener('click', clickPreventDefaultHandler);
        };
        dialogHandler.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });

  var form = setup.querySelector('.setup-wizard-form');

  var succesHandler = function () {
    setup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), succesHandler, window.util.errorHandler);
    evt.preventDefault();
  });
})();

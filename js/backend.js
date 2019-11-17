'use strict';

(function () {
  var URL_POST = 'https://js.dump.academy/code-and-magick';
  var URL_GET = 'https://js.dump.academy/code-and-magick/data';
  window.backend = {
    load: function (onLoad, onError) {

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.open('GET', URL_GET);
      xhr.send();
    },
    save: function (data, onLoad, onError) {

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.open('POST', URL_POST);
      xhr.send(data);
    }
  };
})();

'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var FONT = '16px PT Mono';
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillText("Ура вы победили!", CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText("Список результатов:", CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(225, ' + Math.random() * 101 + '%, 50%)';
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y * 2 + BAR_HEIGHT + FONT_GAP * 3, BAR_WIDTH, -(Math.floor(times[i]) * BAR_HEIGHT) / maxTime + FONT_GAP);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + BAR_HEIGHT + FONT_GAP * 3 + GAP - (Math.floor(times[i]) * BAR_HEIGHT) / maxTime);
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + BAR_HEIGHT + FONT_GAP * 4);
  }
};



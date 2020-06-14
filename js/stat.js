'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var COLOR_SHADOW = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var barWidth = 40;
var histogramHeight = 150;
var initialX = 135;
var initialY = 240;
var indent = 105;
var indentName = 20;
var indentTime = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, COLOR_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 250, 30);
  ctx.fillText('Список результатов: ', 140, 60);

  function getMaxElement(time) {
    var maxElement = time[0];
    for (var i = 1; i < time.length; i++) {
      if (time[i] > maxElement) {
        maxElement = time[i];
      }
    }
    return maxElement;
  }

  function fillBarColor(playerName) {
    var randomOpacity = Math.random().toFixed(2);
    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%, 50%, ' + randomOpacity + ')';
    }
  }

  for (var i = 0; i < times.length; i++) {
    var step = histogramHeight / (getMaxElement(times) - 0);
    var barHeight = times[i] * step;
    var getX = initialX + indent * i;
    var getY = initialY - times[i] * step;

    ctx.fillStyle = fillBarColor(names[i]);
    ctx.fillRect(getX, getY, barWidth, barHeight);
    ctx.fillText(names[i], getX, initialY + indentName);
    ctx.fillText(times[i].toFixed(0), getX, getY - indentTime);
  }
};

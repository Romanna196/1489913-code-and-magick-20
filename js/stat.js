'use strict';

var barWidth = 40;
var histogramHeight = 150;
var initialX = 135;
var initialY = 240;
var indent = 105;
var indentName = 20;
var indentTime = 10;

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#fff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
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

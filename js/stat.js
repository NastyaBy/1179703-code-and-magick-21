// статистика
'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const GAP_TEXT = 30;
const TEXT_HEIGHT = 20;
const BAR_GAP = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;


const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function getRandomNumber(min, max) {
  return min + Math.random() * (max - min);
}

function getExpression() {
  const randomColor = getRandomNumber(0, 100);
  return `hsl(215, ${randomColor}%, 50%)`;
}


window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#ffffff`
  );

  ctx.fillStyle = `#000000`;

  const maxTime = getMaxElement(times);


  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const time = times[i];
    const barX = CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i;
    const barY = CLOUD_Y + BAR_GAP + BAR_HEIGHT + GAP_TEXT;
    const barWidth = BAR_WIDTH;
    const barHeight = -Math.floor((BAR_HEIGHT * time) / maxTime);
    const barYTime = barY + barHeight - TEXT_HEIGHT;
    const barYPlayer = barY + GAP;

    ctx.fillStyle = `#000`;
    ctx.textBaseline = `hanging`;
    ctx.fillText(Math.floor(time), barX, barYTime);
    ctx.fillText(player, barX, barYPlayer);

    ctx.fillStyle = player === `Вы` ? `hsl(0, 100%, 50%)` : getExpression();
    ctx.fillRect(barX, barY, barWidth, barHeight);

  }

  const canvas = document.querySelector(`canvas`);
  const textMessage = canvas.getContext(`2d`);

  textMessage.font = `16px PT Mono`;
  textMessage.textBaseline = `hanging`;
  textMessage.fillStyle = `#000`;
  textMessage.fillText(
      `Ура вы победили!`,
      118,
      30);
  textMessage.fillText(
      `Список результатов:`,
      118,
      50);
};

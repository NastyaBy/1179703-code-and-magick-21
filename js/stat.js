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
const BAR_HEIGHT = CLOUD_HEIGHT - BAR_GAP - TEXT_HEIGHT - BAR_GAP;


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

  function randomS() {
    function rand(min, max) {
      return min + Math.random() * (max - min);
    }
    const randomSaturation = rand(0, 100);
    return `hsl(215, ${randomSaturation}%, 50%)`;
  }

  for (let i = 0; i < players.length; i++) {
    if (players[i] === `Вы`) {
      ctx.fillStyle = `hsl(0, 100%, 50%)`;
    } else {

      ctx.fillStyle = randomS();
    }

    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + BAR_GAP + BAR_HEIGHT + GAP_TEXT,
        BAR_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.fillStyle = `#000`;

    ctx.fillText(
        Math.floor(times[i]),
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + BAR_GAP + BAR_HEIGHT + GAP_TEXT - GAP - (BAR_HEIGHT * times[i]) / maxTime
    );

    ctx.fillText(
        players[i],
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + BAR_GAP + BAR_HEIGHT + TEXT_HEIGHT + GAP_TEXT
    );
  }

  const canvas = document.querySelector(`canvas`);
  const textMessage = canvas.getContext(`2d`);

  textMessage.font = `16px PT Mono`;
  textMessage.textBaseline = `hanging`;
  textMessage.fillText(
      `Ура вы победили!`,
      118,
      30);
  textMessage.fillText(
      `Список результатов:`,
      118,
      50);
};

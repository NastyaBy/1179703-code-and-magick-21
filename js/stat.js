// статистика
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 50;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 20;
const barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;



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
    "rgba(0, 0, 0, 0.7)"
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    "#fff"
  );

  ctx.fillStyle = "#000";

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillText(
      players[i],
      CLOUD_X + GAP,
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i
    );
    ctx.fillRect(
      CLOUD_X + GAP + TEXT_WIDTH,
      CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i,
      (barWidth * times[i]) / maxTime,
      BAR_HEIGHT,
    );
  }

  const canvas = document.querySelector("canvas");

  const textMessage = canvas.getContext("2d");

  textMessage.font = "16px PT Mono";
  textMessage.textBaseline = "hanging";
  textMessage.fillText("Ура вы победили!", 118, 30);
  textMessage.fillText("Список результатов:", 118, 50);
};

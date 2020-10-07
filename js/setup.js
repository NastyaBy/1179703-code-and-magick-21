'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYSYS_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const setup = document.querySelector(`.setup`);
const openSetup = document.querySelector(`.setup-open`);
const closeSetup = setup.querySelector(`.setup-close`);
const userNameInput = document.querySelector(`.setup-user-name`);

const getRandomNumber = function (min, max) {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomItem = function (items) {
  const randomIndex = getRandomNumber(0, items.length);
  return items[randomIndex];
};

const getWizard = function () {
  const name = `${getRandomItem(WIZARD_NAMES)} ${getRandomItem(WIZARD_SURNAMES)}`;
  const coatColor = getRandomItem(WIZARD_COAT_COLORS);
  const eyesColor = getRandomItem(WIZARD_EYSYS_COLOR);

  return {
    name,
    coatColor,
    eyesColor,
  };
};


const similarListElement = document.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const wizards = [];

for (let i = 0; i < 4; i++) {
  const wizard = getWizard();
  wizards.push(wizard);
}

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));

}
similarListElement.appendChild(fragment);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

// Учебный проект: одеть Надежду

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};


openSetup.addEventListener(`click`, function () {
  openPopup();
});

openSetup.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

closeSetup.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

closeSetup.addEventListener(`click`, function () {
  closePopup();
});

userNameInput.addEventListener(`input`, function () {
  let valueLength = userNameInput.value.length;
  let message = ``;

  if (valueLength < MIN_NAME_LENGTH) {
    message = `Ещё ` + `${(MIN_NAME_LENGTH - valueLength)}` + ` симв.`;
  } else if (valueLength > MAX_NAME_LENGTH) {
    message = `Удалите лишние` + `${(valueLength - MAX_NAME_LENGTH)}` + `симв.`;
  }

  userNameInput.setCustomValidity(message);

  userNameInput.reportValidity();
});

const setupWizard = setup.querySelector(`.setup-wizard`);
const clickCoat = setupWizard.querySelector(`.wizard-coat`);
const clickEyes = setupWizard.querySelector(`.wizard-eyes`);
const clickFireball = setup.querySelector(`.setup-fireball-wrap`);

const setupPlayer = setup.querySelector(`.setup-player`);
const inputCoat = setupPlayer.querySelector(`[name="coat-color"]`);
const inputEyes = setupPlayer.querySelector(`[name="eyes-color"]`);
const inputFireball = setupPlayer.querySelector(`[name="fireball-color"]`);

const rgbToHex = function (rgb) {
  return `#${((1 << 24) + (Number(rgb.match(/\d{1,3}/gi)[0]) << 16) + (Number(rgb.match(/\d{1,3}/gi)[1]) << 8) + Number(rgb.match(/\d{1,3}/gi)[2])).toString(16).slice(1)}`;
};

clickCoat.addEventListener(`click`, function () {
  clickCoat.style.fill = getRandomItem(WIZARD_COAT_COLORS);
  inputCoat.value = clickCoat.style.fill;
});

clickEyes.addEventListener(`click`, function () {
  clickEyes.style.fill = getRandomItem(WIZARD_EYSYS_COLOR);
  inputEyes.value = clickEyes.style.fill;
});

clickFireball.addEventListener(`click`, function () {
  clickFireball.style.background = getRandomItem(WIZARD_FIREBALL_COLOR);
  inputFireball.value = rgbToHex(clickFireball.style.background);
});


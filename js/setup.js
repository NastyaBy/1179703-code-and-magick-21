'use strict';

// import {getRandomNumber} from './stat';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYSYS_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const getWizardName = function () {
  const randomName = getRandomNumber(0, WIZARD_NAMES.length);
  return WIZARD_NAMES[randomName];
};

const getWizardSurname = function () {
  const randomSurname = getRandomNumber(0, WIZARD_SURNAMES.length);
  return WIZARD_SURNAMES[randomSurname];
};

const getWizardCoatColor = function () {
  const randomCoatColor = getRandomNumber(0, WIZARD_COAT_COLORS.length);
  return WIZARD_COAT_COLORS[randomCoatColor];
};

const getWizardEysysColor = function () {
  const randomEysysColor = getRandomNumber(0, WIZARD_EYSYS_COLOR.length);
  return WIZARD_EYSYS_COLOR[randomEysysColor];
};

const getWizard = function () {
  return {
    name: getWizardName() + ` ` + getWizardSurname(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEysysColor(),
  };
};

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

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

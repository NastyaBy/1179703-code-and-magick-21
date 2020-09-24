'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYSYS_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const getRandomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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

const maxName = getMaxElement(WIZARD_NAMES);
const maxSurname = getMaxElement(WIZARD_SURNAMES);
const maxCoatColor = getMaxElement(WIZARD_COAT_COLORS);
const maxEysyColor = getMaxElement(WIZARD_EYSYS_COLOR);

function gerWizardName() {
  const wizardName = getRandomValue(0, maxName);
  return wizardName;
}
const wizardSurname = WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
const wizardCoatColor = WIZARD_COAT_COLORS[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)];
const wizardEysyColor = WIZARD_EYSYS_COLOR[Math.floor(Math.random() * WIZARD_EYSYS_COLOR.length)];


const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const wizards = [
  {
    name: gerWizardName() + ` ` + wizardSurname,
    coatColor: wizardCoatColor,
    eyesColor: wizardEysyColor,
  },
  {
    name: gerWizardName() + ` ` + wizardSurname,
    coatColor: wizardCoatColor,
    eyesColor: wizardEysyColor,
  },
  {
    name: gerWizardName() + ` ` + wizardSurname,
    coatColor: wizardCoatColor,
    eyesColor: wizardEysyColor,
  },
  {
    name: gerWizardName() + ` ` + wizardSurname,
    coatColor: wizardCoatColor,
    eyesColor: wizardEysyColor,
  }
];


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

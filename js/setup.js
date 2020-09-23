'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYSYS_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const wizards = [
  {
    name: WIZARD_NAMES[0] + ` ` + WIZARD_SURNAME[0],
    coatColor: WIZARD_COAT_COLOR[0],
    eyesColor: WIZARD_EYSYS_COLOR[0],
  },
  {
    name: WIZARD_NAMES[1] + ` ` + WIZARD_SURNAME[1],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: WIZARD_EYSYS_COLOR[1],
  },
  {
    name: WIZARD_NAMES[2] + ` ` + WIZARD_SURNAME[2],
    coatColor: WIZARD_COAT_COLOR[2],
    eyesColor: WIZARD_EYSYS_COLOR[2],
  },
  {
    name: WIZARD_NAMES[3] + ` ` + WIZARD_SURNAME[3],
    coatColor: WIZARD_COAT_COLOR[3],
    eyesColor: WIZARD_EYSYS_COLOR[3],
  },
  {
    name: WIZARD_NAMES[4] + ` ` + WIZARD_SURNAME[4],
    coatColor: WIZARD_COAT_COLOR[4],
    eyesColor: WIZARD_EYSYS_COLOR[4],
  },
  {
    name: WIZARD_NAMES[5] + ` ` + WIZARD_SURNAME[5],
    coatColor: WIZARD_COAT_COLOR[5],
    eyesColor: WIZARD_EYSYS_COLOR[5],
  },
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

'use strict';

var COUNT = 4;
var WISARDS = [];
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomNumber];
  }
  return randomElement;
};

var shuffleArray = function (array) {
  var mixedArray = array.slice();
  for (var i = mixedArray.length - 1; i > 0; i--) {
    var randomNumber = Math.floor(Math.random() * (i + 1));
    var tempValue = mixedArray[i];
    mixedArray[i] = array[randomNumber];
    mixedArray[randomNumber] = tempValue;
  }
  return mixedArray;
};

var generateWizards = function () {
  var shuffleWizardNames = shuffleArray(NAMES);
  var shuffleWizardSurnames = shuffleArray(SURNAMES);
  for (var i = 0; i < COUNT; i++) {
    WISARDS.push({
      names: shuffleWizardNames[i],
      surnames: shuffleWizardSurnames[i],
      coatColor: getRandomElement(COAT_COLOR),
      eyesColor: getRandomElement(EYES_COLOR)
    });
  }
  return WISARDS;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.names + '\n ' + wizard.surnames;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function () {
  var similarWizards = generateWizards();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards();

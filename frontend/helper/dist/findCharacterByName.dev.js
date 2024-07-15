"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCharacter = void 0;

var convertStringToArray = function convertStringToArray(string) {
  return string.split('');
};

var findCharacter = function findCharacter(string, array) {
  var characteresFound = [];
  array.forEach(function (character) {
    var characterConverted = convertStringToArray(character.name.toLowerCase());
    var stringConverted = convertStringToArray(string.toLowerCase());

    if (characterConverted.includes(stringConverted.join(''))) {
      characteresFound.push(character);
    }
  });
  return characteresFound;
};

exports.findCharacter = findCharacter;
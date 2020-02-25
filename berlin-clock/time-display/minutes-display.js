const constants = require('../model/constants.js');

exports.display = function(minutes) {
	throwIfInvalidMinutes(minutes);
	return '';
}

function throwIfInvalidMinutes(minutes) {
	if (isNaN(minutes)) {
    throw Error(`Invalid minutes: non numeric characters present. minutes value: ${minutes}`);
  }

  if (minutes < 0) {
    throw Error(`Invalid minutes: negative numeric value. minutes value: ${minutes}`);
  }
}
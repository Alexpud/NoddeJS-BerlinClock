const constants = require('../model/constants.js');

exports.display = function(seconds) {
	throwIfInvalidSeconds(seconds);
	return seconds % 2 == 0 ? constants.SWITCHED_ON_YELLOW_LAMP : constants.SWITCHED_OFF_LAMP
}

function throwIfInvalidSeconds(seconds) {
  if (isNaN(seconds)) {
    throw Error(`Invalid seconds: non numeric characters present. Seconds value: ${seconds}`);
  }

  if (seconds < 0) {
    throw Error(`Invalid seconds: negative numeric value. seconds value: ${seconds}`);
  }
}


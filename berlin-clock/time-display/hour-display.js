const LAMPS_PER_ROW = 4; 
const constants = require('../model/constants');

exports.display = (hours) => {
  validateHors(hours);
  
  ({ firstRowSwitchedOnLamps, secondRowSwitchedOnLamps } = switchedOnLampsOnRows(hours));

  var displayedHours = displayLampRow(firstRowSwitchedOnLamps);
  displayedHours += '\n';
  displayedHours += displayLampRow(secondRowSwitchedOnLamps);

  return displayedHours;
}

function validateHors(hours) {
  if (isNaN(hours)) {
    throw Error(`Invalid hours: non numeric characters present. Hours value: ${hours}`);
  }
}

function switchedOnLampsOnRows(hours) {
  var firstRowSwitchedOnLamps = 0;
  var secondRowSwitchedOnLamps = 0;
  while (hours > 0) {
    if (hours - 5 >= 5) {
      firstRowSwitchedOnLamps += 1;
      hours -= 5;
    }
    else {
      secondRowSwitchedOnLamps += 1;
      hours -= 1;
    }
  }
  return { firstRowSwitchedOnLamps, secondRowSwitchedOnLamps };
}

function displayLampRow(nSwitchedOnLamps) {
  var displayedLampsInRow = '';
  while (nSwitchedOnLamps > 0) {
    displayedLampsInRow += nSwitchedOnLamps > 0 ? constants.SWITCHED_ON_RED_LAMP : constants.SWITCHED_OFF_LAMP;
    nSwitchedOnLamps--;
  }

  displayedLampsInRow += constants.SWITCHED_OFF_LAMP.repeat(LAMPS_PER_ROW - nSwitchedOnLamps);
  return displayedLampsInRow;
}
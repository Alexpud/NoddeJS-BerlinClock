const LAMPS_PER_ROW = 4;
const constants = require('../model/constants');

exports.display = (hours) => {
  throwIfInvalidHours(hours);
  
  ({ firstRowSwitchedOnLamps, secondRowSwitchedOnLamps } = switchedOnLampsOnTwoRows(hours));
  var displayedHours = displayLampRow(firstRowSwitchedOnLamps);
  displayedHours += '\n';
  displayedHours += displayLampRow(secondRowSwitchedOnLamps);

  return displayedHours;
}

function throwIfInvalidHours(hours) {
  if (isNaN(hours)) {
    throw Error(`Invalid hours: non numeric characters present. Hours value: ${hours}`);
  }

  if (hours < 0) {
    throw Error(`Invalid hours: negative numeric value. Hours value: ${hours}`);
  }
}

function switchedOnLampsOnTwoRows(hours) {
  var firstRowSwitchedOnLamps = 0;
  var secondRowSwitchedOnLamps = 0;
  hours = hours > 24 ? hours % 24 : hours;
  while (hours > 0) {
    if (hours - 5 >= 0) {
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
  var displayedLampsInRow = constants.SWITCHED_ON_RED_LAMP.repeat(nSwitchedOnLamps);
  displayedLampsInRow += constants.SWITCHED_OFF_LAMP.repeat(LAMPS_PER_ROW - nSwitchedOnLamps);
  return displayedLampsInRow;
}
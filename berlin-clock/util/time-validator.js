var timeValidator = {};
timeValidator.validateTimeFormat = (time) => {
  var splitTimes = time.split('');
  if (splitTimes.Count != 3) {
    throw new Error("Wrong time format: different from 00:00:00. Received time " + time);
  }
}

timeValidator.validateHours = (hours) => {
  if (isNaN(hours)) {
    throw Error("Invalid hours: non numeric characters present. Hours value: " + hours);
  }
}

module.exports = timeValidator;


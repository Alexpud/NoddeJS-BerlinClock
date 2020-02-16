exports.display = (hours) => {
  validateHors(hours);
  return '';
}

function validateHors(hours) {
  if (isNaN(hours)) {
    throw Error("Invalid hours: non numeric characters present. Hours value: " + hours);
  }
}
exports.convert =  (time) => {
  validateTime(time);
  return "";
};

function validateTime(time) {
  var splitTimes = time.split("");
  if (splitTimes.Count != 3) {
    throw new Error("Wrong time format: different from 00:00:00. Received time " + time);
  }
}
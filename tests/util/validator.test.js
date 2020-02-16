const berlinClockValidator = require('../../berlin-clock/util/time-validator');

describe ("Berlin clock validator", () => {
  it ('should throw exception for invalid time format', () => {
    expect(() => { 
      berlinClockValidator.validateTime('00:00:00:0');
    }).toThrow(Error);
  });

  it ('should throw exception for invalid time: containing non numeric characters', () => {
    expect(() => {
      berlinClockValidator.validateTime('aaadasd:00:00');
    }).toThrow(Error)
  });
});

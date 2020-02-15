var berlinClock = require('../berlin-clock/berlin-clock');

describe ("Test clock validation", () => {
  it ('should throw exception for invalid time format', () => {
    expect(() => { berlinClock.convert("00:00:00:0");}).toThrow(Error);
  });

  it ('should throw exception for invalid time: containing non numeric characters', () => {
    expect(() => {
      berlinClock.convert("aaadasd:00:00");
    }).toThrow(Error)
  });
});
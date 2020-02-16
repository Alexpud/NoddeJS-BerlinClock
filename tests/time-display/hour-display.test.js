const hourDisplay = require('../../berlin-clock/time-display/hour-display');

describe ('Should validate hours before displaying it', () => {
  it ('Should throw error when hours is not numeric', () => {
    expect(() => {
      hourDisplay.display('aa');
    }).toThrow(Error);
  });
});

describe ('Display hours of the berlin clock', () => {
  it ('Should display correctly 0 hours', () => {
    let expectedDisplayedHours = `OOOO
    OOOO`;

    let displayedHours = hourDisplay.display('00');

    expect(displayedHours).toBe(expectedDisplayedHours);
  });
});

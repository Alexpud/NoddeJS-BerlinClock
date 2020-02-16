const hourDisplay = require('../../berlin-clock/time-display/hour-display');

describe ('Should validate hours before displaying it', () => {
  it ('Should throw error when hours is not numeric', () => {
    expect(() => {
      hourDisplay.display('aa');
    }).toThrow(Error);
  });

  it ('Should throw error when hours is a negative number', () => {
    expect(() => {
      hourDisplay.display('-40');
    }).toThrow(Error);
  });
});

describe ('Display hours of the berlin clock', () => {
  it ('Should display correctly 0 hours', () => {
    let expectedDisplayedHours = `OOOO\nOOOO`;

    let displayedHours = hourDisplay.display('00');

    expect(displayedHours).toBe(expectedDisplayedHours);
  });

  it ('Should display correctly 3 hours', () => {
    let expectedDisplayedHours = `OOOO\nRRRO`;
  
    let displayedHours = hourDisplay.display('03');
  
    expect(displayedHours).toBe(expectedDisplayedHours);
  });

  it ('Should display correctly 19 hours', () => {
    let expectedDisplayedHours = `RRRO\nRRRR`;
  
    let displayedHours = hourDisplay.display('19');
  
    expect(displayedHours).toBe(expectedDisplayedHours);
  });
});

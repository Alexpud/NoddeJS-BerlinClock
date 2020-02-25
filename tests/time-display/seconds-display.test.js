let secondsDisplay = require('../../berlin-clock/time-display/seconds-display.js');
let constants = require('../../berlin-clock/model/constants.js');

describe('should not display invalid seconds', () => {
	it('should throw an error when seconds is not a numeric value', () => {
		var seconds = 'a';
		expect(() => {
			secondsDisplay.display(seconds);
		}).toThrow(Error);
	});

	it('should throw an error when seconds is negative value', () => {
		var seconds = '-1';
		expect(() => {
			secondsDisplay.display(seconds);
		}).toThrow(Error);
	});
});

describe('should display seconds correctly', () => {
	it('should display odd seconds correctly', () => {
		var seconds = 1;
		expect(secondsDisplay.display(seconds)).toBe(constants.SWITCHED_OFF_LAMP);
	});

	it('should display even seconds correctly', () => {
		var seconds = 2;
		expect(secondsDisplay.display(seconds)).toBe(constants.SWITCHED_ON_YELLOW_LAMP);
	})
});
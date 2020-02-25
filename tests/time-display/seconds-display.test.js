let secondsDisplay = require('../../berlin-clock/time-display/seconds-display.js');
let constants = require('../../berlin-clock/model/constants.js');

describe('Should throw an error when seconds are invalid', () => {
	it('Should throw an error when seconds are not a numeric value', () => {
		var seconds = 'a';
		expect(() => {
			secondsDisplay.display(seconds);
		}).toThrow(Error);
	});

	it('Should throw an error when seconds are a negative value', () => {
		var seconds = '-1';
		expect(() => {
			secondsDisplay.display(seconds);
		}).toThrow(Error);
	});
});

describe('Should display seconds correctly', () => {
	it('Should display odd seconds correctly', () => {
		var seconds = 1;
		expect(secondsDisplay.display(seconds)).toBe(constants.SWITCHED_OFF_LAMP);
	});

	it('Should display even seconds correctly', () => {
		var seconds = 2;
		expect(secondsDisplay.display(seconds)).toBe(constants.SWITCHED_ON_YELLOW_LAMP);
	})
});
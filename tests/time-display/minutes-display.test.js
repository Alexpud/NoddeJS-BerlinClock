const constants = require('../../berlin-clock/model/constants.js');
const minutesDisplay = require('../../berlin-clock/time-display/minutes-display.js');

describe('It should throw an error if minutes are not valid', () => {
	it('Should throw an error when minutes are not a numeric value', () => {
		var minutes = 'a';
		expect(() => {
			minutesDisplay.display(minutes);
		}).toThrow(Error);
	});

	it('Should throw an error when minutes are a negative value', () => {
		var minutes = '-1';
		expect(() => {
			minutesDisplay.display(minutes);
		}).toThrow(Error);
	});
})
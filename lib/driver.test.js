const Driver = require('./driver.js');

describe('Driver class', () => {
    it('gets the delivery drivers name and currentSchedule', () => {
        const deliveryDriver = new Driver('Clifford');

        expect(deliveryDriver.name).toEqual('Clifford');
        expect(deliveryDriver.currentSchedule).toEqual(expect.any(Object));
    });
});

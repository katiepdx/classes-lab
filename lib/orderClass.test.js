// Import classes 
const Order = require('./orderClass.js');

describe('Order class', () => {
    it('gets the name, deliveryMinute, and startTime of the order', () => {
        const customerOrder = new Order('cheese pizza', 60, 10);

        expect(customerOrder.name).toEqual('cheese pizza');
        expect(customerOrder.deliveryMinute).toEqual(60);
        expect(customerOrder.startTime).toEqual(30);
        expect(customerOrder.startMinute).toEqual(30);
    });

});

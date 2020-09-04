// Import classes 
const Order = require('./orderClass.js');

describe('Order class', () => {
    it('gets the name, deliveryMinute, and startTime of the order', () => {
        const customerOrder = new Order('cheese pizza', 60, 10);

        // name - public
        expect(customerOrder.name).toEqual('cheese pizza');

        // deliveryMinute - (time customer wants pizza delivered) public
        expect(customerOrder.deliveryMinute).toEqual(60);

        // drivingDistanceInMinutes - private
        // expect(customerOrder.#drivingDistanceInMinutes).toEqual(10);

        // startTime = COOK_TIME + drivingDistanceInMinutes
        expect(customerOrder.startTime).toEqual(30)

        // startMinute - public getter 

    })

})
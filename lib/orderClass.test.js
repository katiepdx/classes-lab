// Import classes 
const Order = require('./orderClass.js');

describe('Order class', () => {
    it('gets the name and deliveryMinute of the order', () => {
        // name - public
        // deliveryMinute - (time customer wants pizza delivered) public
        const orderName = new Order('cheese pizza', 10);
        expect(orderName.name,).toEqual('cheese pizza');
        expect(orderName.deliveryMinute,).toEqual(10);
    })

    // COOK_TIME - private (20 min for each pizza)
    // drivingDistanceInMinutes - private
    // startMinute - public getter 
    // startTime = COOK_TIME + drivingDistanceInMinutes
})
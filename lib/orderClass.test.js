// Import classes 
const Order = require('./orderClass.js');

describe('Order class', () => {
    it('gets the name of the order', () => {
        // name - public
        const orderName = new Order('cheese pizza');
        expect(orderName.name).toEqual('cheese pizza');
    })

    // deliveryMinute - (time customer wants pizza delivered) public
    // COOK_TIME - private (20 min for each pizza)
    // drivingDistanceInMinutes - private
    // startMinute - public getter 
    // startTime = COOK_TIME + drivingDistanceInMinutes
})
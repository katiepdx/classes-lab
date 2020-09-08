const Driver = require('./driver.js');
const Parlor = require('./parlor.js');
const Order = require('./orderClass.js');

describe('Parlor class', () => {
    it('checks that a new driver is added to the parlor class', () => {
        const parlor = new Parlor();

        const deliveryDriver1 = new Driver('Clifford');
        const deliveryDriver2 = new Driver('Spot');
        parlor.addDriver(deliveryDriver1.name);
        parlor.addDriver(deliveryDriver2.name);


        expect(parlor.allParlorDrivers).toEqual(['Clifford', 'Spot']);
    });

    it('checks that a new order is added to the parlor class', () => {
        const parlor = new Parlor();
        const newOrder1 = new Order('cheese pizza', 100, 10);
        const newOrder2 = new Order('veggie pizza', 40, 10);

        parlor.addOrder(newOrder1);
        parlor.addOrder(newOrder2);

        expect(parlor.allParlorOrders).toEqual(['cheese pizza', 'veggie pizza']);
    });
});

class Parlor {
    allParlorDrivers = [];
    allParlorOrders = [];


    addDriver(driversName) {
        this.allParlorDrivers.push(driversName);
    }

    addOrder(order) {
        this.allParlorOrders.push(order.name);
    }
}

module.exports = Parlor;


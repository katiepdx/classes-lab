class Order {
    #COOK_TIME = 20;
    #drivingDistanceInMinutes;
    constructor(name, deliveryMinute, drivingDistanceInMinutes) {
        this.name = name;
        this.deliveryMinute = deliveryMinute;
        this.#drivingDistanceInMinutes = drivingDistanceInMinutes;
        this.startTime = this.#COOK_TIME + this.#drivingDistanceInMinutes;
        this.startMinute = deliveryMinute - this.startTime;
    }
}

module.exports = Order;

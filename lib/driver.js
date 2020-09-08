const Schedule = require('./schedule.js');

class Driver {
    constructor(name) {
        this.name = name;
        this.currentSchedule = new Schedule;
    }
}

module.exports = Driver;

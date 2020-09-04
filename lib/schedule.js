class Schedule {
    // private schedule - create an array with the minutes in a day, free minutes filled with false.
    #minutes = [...Array(1440).fill(false)];

    nextOpenMinute() {
        let firstFreeMinute = this.#minutes.findIndex(minute => !minute)
        return firstFreeMinute;
    }

    clear() {
        let clearedSchedule = this.#minutes = [...Array(1440).fill(false)];
        return clearedSchedule;
    }
}

module.exports = Schedule;
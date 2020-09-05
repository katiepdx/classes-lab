class Schedule {
    #minutes = [...Array(1440).fill(false)];

    nextOpenMinute() {
        let firstFreeMinute = this.#minutes.findIndex(minute => !minute)
        return firstFreeMinute;
    }

    freeWindow(startMinute, endMinute) {
        let timeWindow = this.#minutes.slice(startMinute, endMinute)
        let isFree = timeWindow.includes(false)
        return isFree;
    }

    clear() {
        let clearedSchedule = this.#minutes = [...Array(1440).fill(false)];
        return clearedSchedule;
    }

    print() {
        let printSchedule = console.log(this.#minutes.map(minute => minute ? "busy" : "free"))
        return printSchedule;
    }

    addOrder(startMinute, deliveryMinute) {
        let fillSchedule = this.#minutes.fill("busy", startMinute, deliveryMinute);
        console.log(fillSchedule)
        return fillSchedule;
    }
}

module.exports = Schedule;
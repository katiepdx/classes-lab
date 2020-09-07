class Schedule {
    #minutes = [...Array(1440).fill(false)];

    nextOpenMinute() {
        const firstFreeMinute = this.#minutes.findIndex(minute => !minute);
        return firstFreeMinute;
    }

    freeWindow(startMinute, endMinute) {
        const timeWindow = this.#minutes.slice(startMinute, endMinute);
        const isFree = timeWindow.includes(false);
        return isFree;
    }

    clear() {
        const clearedSchedule = this.#minutes = [...Array(1440).fill(false)];
        return clearedSchedule;
    }

    print() {
        const printSchedule = console.log(this.#minutes.map(minute => minute ? 'busy' : 'free'));
        return printSchedule;
    }

    addOrder(startMinute, deliveryMinute) {
        const fillSchedule = this.#minutes.fill('busy', startMinute, deliveryMinute);
        return fillSchedule;
    }
}

module.exports = Schedule;
